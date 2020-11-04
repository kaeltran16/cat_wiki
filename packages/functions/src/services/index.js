const axios = require('axios');
const admin = require('firebase-admin');
const { BASE_URL, CAT_API_KEY, COLLECTIONS } = require('../constants');

const catApiService = axios.create({
	baseURL: BASE_URL,
	headers: {
		'x-api-key': CAT_API_KEY
	}
});

const searchCat = async name => {
	try {
		const res = await catApiService.get(`/breeds/search?q=${name}`);
		return res.data;
	} catch (e) {
		throw e;
	}
};

const topSearchFromFirestore = async limit => {
	const topSearches = [];

	try {
		const querySnapshot = await admin
			.firestore()
			.collection(COLLECTIONS.search)
			.orderBy('search', 'desc')
			.limit(limit)
			.get();

		querySnapshot.docs.forEach(doc => {
			topSearches.push(doc.data());
		});
	} catch (e) {
		throw e;
	}

	return topSearches;
};

const storeSearchToFirestore = async data => {
	try {
		const { id, desc, name, photoUrl } = data;

		const querySnapshot = await admin
			.firestore()
			.collection(COLLECTIONS.search)
			.doc(id)
			.get();
		if (querySnapshot.exists) {
			return admin
				.firestore()
				.collection(COLLECTIONS.search)
				.doc(id)
				.set({
					id,
					desc,
					name,
					photoUrl,
					search: querySnapshot.data().search + 1
				});
		} else {
			return admin.firestore().collection(COLLECTIONS.search).doc(id).set({
				id,
				desc,
				name,
				photoUrl,
				search: 1
			});
		}
	} catch (e) {
		throw e;
	}
};

const searchCatDetail = async id => {
	try {
		const res = await catApiService.get(`/images/search?breed_ids=${id}`);
		return res.data;
	} catch (e) {
		throw e;
	}
};

const searchCatImages = async (limit, id) => {
	try {
		const res = await catApiService.get(
			`/images/search?limit=${limit}&breed_id=${id}`
		);
		return res.data;
	} catch (e) {
		throw e;
	}
};

module.exports = {
	catApiService,
	searchCat,
	topSearchFromFirestore,
	storeSearchToFirestore,
	searchCatDetail,
	searchCatImages
};
