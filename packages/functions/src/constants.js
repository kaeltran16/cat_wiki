const functions = require('firebase-functions');
const CAT_API_KEY = functions.config().catapi.key;

if (!CAT_API_KEY) {
	throw Error('CatAPI key is required');
}

const BASE_URL = process.env.BASE_URL || 'https://api.thecatapi.com/v1';

const COLLECTIONS = {
	search: 'searches'
};
module.exports = {
	CAT_API_KEY,
	BASE_URL,
	COLLECTIONS
};
