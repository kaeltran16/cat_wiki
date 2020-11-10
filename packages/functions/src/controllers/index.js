const {
	searchCat,
	topSearchFromFirestore,
	searchCatDetail,
	storeSearchToFirestore,
	searchCatImages
} = require('../services');
const {
	formatCatsIntoIdName,
	formatCatDetail,
	formatCatImages
} = require('../utils');
const getSearchCatByName = async (req, res, next) => {
	const name = req.query.name;

	if (!name) {
		return res.status(400).json({
			error: 'Bad Request'
		});
	}

	try {
		const cats = await searchCat(name);
		const formatted = formatCatsIntoIdName(cats);
		return res.status(200).json(formatted);
	} catch (e) {
		return next(e);
	}
};

const getTopSearch = async (req, res) => {
	const limit = parseInt(req.query.limit);

	if (!limit) {
		return res.status(400).json({
			error: 'Bad Request'
		});
	}

	try {
		const topSearches = await topSearchFromFirestore(limit);
		return res.status(200).json(topSearches);
	} catch (e) {
		return res.status(500).json({
			error: 'Internal Error'
		});
	}
};

const postSearch = async (req, res) => {
	try {
		const { id, desc, name, photoUrl } = req.body;
	} catch (e) {
		return res.status(400).json({
			error: 'Bad Request'
		});
	}

	try {
		const writeResult = await storeSearchToFirestore(req.body);
		return res.status(201).json(writeResult);
	} catch (e) {
		return res.status(500).json({
			error: 'Internal Error'
		});
	}
};

const getCatDetailByName = async (req, res) => {
	const { name } = req.query;

	if (!name) {
		return res.status(400).json({
			error: 'Bad Request'
		});
	}

	try {
		const cat = await searchCat(name);
		if (cat.length === 0) {
			return res.status(404).json({
				error: 'Cat not found.'
			});
		}
		const catDetail = await searchCatDetail(cat[0].id);
		return res.status(200).json(formatCatDetail(catDetail));
	} catch (e) {
		return res.status(500).json({
			error: 'Internal Error'
		});
	}
};

const getCatImages = async (req, res) => {
	const limit = req.query.limit || 4;
	const name = req.query.name;

	if (!name) {
		return res.status(400).json({
			error: 'Bad Request'
		});
	}

	try {
		const cat = await searchCat(name);
		if (cat.length === 0) {
			return res.status(404).json({
				error: 'Cat not found.'
			});
		}
		const catImages = await searchCatImages(limit, cat[0].id);
		return res.status(200).json(formatCatImages(catImages));
	} catch (e) {
		return res.status(500).json({
			error: 'Internal Error'
		});
	}
};

module.exports = {
	getSearchCatByName,
	getTopSearch,
	getCatDetailByName,
	getCatImages,
	postSearch
};
