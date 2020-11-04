const router = require('express').Router();
const {
	getCatImages,
	getCatDetailByName,
	getTopSearch,
	getSearchCatByName,
	postSearch
} = require('./controllers');

router.get('/search', getSearchCatByName);
router.post('/search', postSearch);
router.get('/detail', getCatDetailByName);
router.get('/topSearch', getTopSearch);
router.get('/images', getCatImages);
module.exports = router;
