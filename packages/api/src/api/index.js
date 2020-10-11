const express = require("express");

const cat = require("./cat");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "test",
  });
});

router.use("/cat", cat);

module.exports = router;
