const axios = require("axios");
const CAT_API_KEY = require("./constants");

function test(req, res) {
  return res.status(200).json({ message: "yayy" });
}

const searchCat = async (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ message: "query is missing" });
  }
  try {
    const result = await axios.get(
      `https://api.thecatapi.com/v1/breeds/search?q=${name}`,
      {
        headers: {
          "x-api-key": CAT_API_KEY,
        },
      }
    );

    return res.status(200).json(result.data);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};
module.exports = {
  test,
  searchCat,
};
