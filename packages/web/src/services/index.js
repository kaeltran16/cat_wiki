const baseUrl =
	process.env.BASEURL || 'http://localhost:5001/cat-wiki/us-central1/api';

const createResource = promise => {
	let status = 'pending';
	let response = null;

	const suspender = promise.then(
		r => {
			status = 'success';
			response = r;
		},
		e => {
			status = 'error';
			response = e;
		}
	);
	return {
		read: () => {
			switch (status) {
				case 'pending':
					throw suspender;
				case 'error':
					throw response;
				case 'success':
					return response;
				default:
					return response;
			}
		}
	};
};

const searchCatByName = name => {
	return fetch(`${baseUrl}/search?name=${name}`).then(res => res.json());
};

const catDetailByName = name => {
	return fetch(`${baseUrl}/detail?name=${name}`).then(res => res.json());
};

const catImgByName = name => {
	return fetch(`${baseUrl}/images?limit=8&name=${name}`).then(res =>
		res.json()
	);
};

const topSearchedCat = limit => {
	return fetch(`${baseUrl}/topSearch?limit=${limit}`).then(res => res.json());
};

const storeSearchedCat = ({ id, photoUrl, desc, name }) => {
	return fetch(`${baseUrl}/search`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			id,
			photoUrl,
			desc,
			name
		})
	});
};

export {
	createResource,
	searchCatByName,
	catDetailByName,
	catImgByName,
	storeSearchedCat,
	topSearchedCat
};
