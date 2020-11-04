const CAT_API_KEY =
	process.env.CAT_API_KEY || 'd3841eba-6937-47d1-bc42-608b4b6bf05c';

const BASE_URL = process.env.BASE_URL || 'https://api.thecatapi.com/v1';

const COLLECTIONS = {
	search: 'searches'
};
module.exports = {
	CAT_API_KEY,
	BASE_URL,
	COLLECTIONS
};
