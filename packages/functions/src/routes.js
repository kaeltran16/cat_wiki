const router = require("express").Router();
const { test, searchCat } = require("./controller");

router.get("/", test);
router.get("/search", searchCat);

module.exports = router;
