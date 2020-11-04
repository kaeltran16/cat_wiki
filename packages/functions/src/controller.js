// const axios = require('axios');
// const admin = require('firebase-admin');
// const { CAT_API_KEY } = require('./constants');
//
// const collections = {
// 	search: 'searches'
// };
// // const searchCat = async (req, res) => {
// // 	const name = req.query.name;
// // 	if (!name) {
// // 		return res.status(400).json({ message: 'query is missing' });
// // 	}
// // 	try {
// // 		const result = await axios.get(
// // 			`https://api.thecatapi.com/v1/breeds/search?q=${name}`,
// // 			{
// // 				headers: {
// // 					'x-api-key': CAT_API_KEY
// // 				}
// // 			}
// // 		);
// //
// // 		const formatted = result.data.reduce((acc, currentValue) => {
// // 			acc.push({
// // 				id: currentValue.id,
// // 				name: currentValue.name
// // 			});
// // 			return acc;
// // 		}, []);
// //
// // 		return res.status(200).json(formatted);
// // 	} catch (e) {
// // 		return res.status(400).json({ message: e.message });
// // 	}
// // };
//
//
// // const getTopSearch = async (req, res) => {
// // 	try {
// // 		const limit = parseInt(req.query.limit);
// // 		const querySnapshot = await admin
// // 			.firestore()
// // 			.collection(collections.search)
// // 			.orderBy('search', 'desc')
// // 			.limit(limit)
// // 			.get();
// //
// // 		const topSearches = [];
// // 		querySnapshot.docs.forEach(doc => {
// // 			topSearches.push(doc.data());
// // 		});
// // 		return res.status(200).json(topSearches);
// // 	} catch (e) {
// // 		return res.status(500).json({ message: e.message });
// // 	}
// // };
//
// // const getCatByName = async (req, res) => {
// // 	const { name } = req.query;
// // 	try {
// // 		const catItem = await axios.get(
// // 			`https://api.thecatapi.com/v1/breeds/search?q=${name}`,
// // 			{
// // 				headers: {
// // 					'x-api-key': CAT_API_KEY
// // 				}
// // 			}
// // 		);
// //
// // 		const formattedItem = catItem.data.reduce((acc, currentValue) => {
// // 			acc.push({
// // 				id: currentValue.id,
// // 				name: currentValue.name
// // 			});
// // 			return acc;
// // 		}, []);
// //
// // 		const result = await axios.get(
// // 			`https://api.thecatapi.com/v1/images/search?breed_ids=${formattedItem[0].id}`,
// // 			{
// // 				headers: {
// // 					'x-api-key': CAT_API_KEY
// // 				}
// // 			}
// // 		);
// // 		const formatted = result.data.reduce((acc, currentValue) => {
// // 			const data = {
// // 				photoUrl: currentValue.url,
// // 				id: currentValue.breeds[0].id,
// // 				name: currentValue.breeds[0].name,
// // 				life_span: currentValue.breeds[0].life_span,
// // 				temperament: currentValue.breeds[0].temperament,
// // 				origin: currentValue.breeds[0].origin,
// // 				desc: currentValue.breeds[0].description,
// // 				adaptability: currentValue.breeds[0].adaptability,
// // 				affection_level: currentValue.breeds[0].affection_level,
// // 				child_friendly: currentValue.breeds[0].child_friendly,
// // 				grooming: currentValue.breeds[0].grooming,
// // 				intelligence: currentValue.breeds[0].intelligence,
// // 				health_issues: currentValue.breeds[0].health_issues,
// // 				social_needs: currentValue.breeds[0].social_needs,
// // 				stranger_friendly: currentValue.breeds[0].stranger_friendly
// // 			};
// // 			Object.assign(acc, data);
// // 			return acc;
// // 		}, {});
// // 		return res.status(200).json(formatted);
// // 	} catch (e) {
// // 		return res.status(500).json({ message: e.message });
// // 	}
// // };
//
// // const storeSearches = async (req, res) => {
// // 	try {
// // 		const searches = req.body.searches;
// // 		const batch = admin.firestore().batch();
// //
// // 		searches.forEach(search => {
// // 			batch.set(
// // 				admin.firestore().collection(collections.search).doc(search.id),
// // 				search
// // 			);
// // 		});
// //
// // 		await batch.commit();
// // 		return res.status(201).send('batch saved');
// // 	} catch (e) {
// // 		return res.status(500).json({ message: e.message });
// // 	}
// // };
//
// // const storeSearch = async (req, res) => {
// // 	try {
// // 		const { id, desc, name, photoUrl } = req.body;
// //
// // 		const querySnapshot = await admin
// // 			.firestore()
// // 			.collection(collections.search)
// // 			.doc(id)
// // 			.get();
// // 		if (querySnapshot.exists) {
// // 			admin
// // 				.firestore()
// // 				.collection(collections.search)
// // 				.doc(id)
// // 				.set({
// // 					id,
// // 					desc,
// // 					name,
// // 					photoUrl,
// // 					search: querySnapshot.data().search + 1
// // 				});
// // 		} else {
// // 			admin.firestore().collection(collections.search).doc(id).set({
// // 				id,
// // 				desc,
// // 				name,
// // 				photoUrl,
// // 				search: 1
// // 			});
// // 		}
// // 		return res.status(201);
// // 	} catch (e) {
// // 		return res.status(500).json({ message: e.message });
// // 	}
// // };
//
// const getCatImages = async (req, res) => {
// 	try {
// 		const { limit, name } = req.query;
// 		const catItem = await axios.get(
// 			`https://api.thecatapi.com/v1/breeds/search?q=${name}`,
// 			{
// 				headers: {
// 					'x-api-key': CAT_API_KEY
// 				}
// 			}
// 		);
//
// 		const formattedItem = catItem.data.reduce((acc, currentValue) => {
// 			acc.push({
// 				id: currentValue.id,
// 				name: currentValue.name
// 			});
// 			return acc;
// 		}, []);
// 		const result = await axios.get(
// 			`https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_id=${formattedItem[0].id}`,
// 			{
// 				headers: {
// 					'x-api-key': CAT_API_KEY
// 				}
// 			}
// 		);
// 		const formatted = result.data.reduce((acc, currentValue, idx) => {
// 			acc.push({
// 				photoUrl: currentValue.url,
// 				name: `${currentValue.breeds[0].name}-${idx}`,
// 				id: currentValue.breeds[0].id
// 			});
// 			return acc;
// 		}, []);
// 		return res.status(200).json(formatted);
// 	} catch (e) {
// 		return res.status(500).json({ message: e.message });
// 	}
// };
// module.exports = {
// 	searchCat,
// 	getTopSearch,
// 	storeSearches,
// 	storeSearch,
// 	getCatImages,
// 	getCatByName
// };
