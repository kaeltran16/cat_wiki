import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchUrl = async () => {
		const response = await fetch(url, options);
		if (response.ok) {
			const data = await response.json();
			setData(data);
			setLoading(false);
		} else {
			throw Error('error occur when fetching..');
		}
	};

	useEffect(() => {
		fetchUrl();
	}, []);
	return [data, loading];
};

const useWindowUnload = () => {
	const handleBeforeUnload = () => {
		// fetch('http://localhost:5001/cat-wiki/us-central1/api/test');

	};
	useEffect(() => {
		console.log('dsadas');
		window.addEventListener('beforeunload', handleBeforeUnload);
		return () => window.removeEventListener('beforeunload', handleBeforeUnload);
	}, []);
};

export { useFetch, useWindowUnload };
