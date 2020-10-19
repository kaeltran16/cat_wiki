const router = require("express").Router();
const {
  test,
  searchCat,
  getTopSearch,
  storeSearches,
} = require("./controller");

router.get("/", test);
router.get("/search", searchCat);
router.get("/topSearch", getTopSearch);
router.post("/searches", storeSearches);
module.exports = router;
