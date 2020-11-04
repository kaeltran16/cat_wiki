const axios = require("axios");
const admin = require("firebase-admin");
const CAT_API_KEY = require("./constants");

function test(req, res) {
  return res.status(200).json({ message: "yayy" });
}

const collections = {
  search: "searches",
};
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

const getTopSearch = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);
    const querySnapshot = await admin
      .firestore()
      .collection(collections.search)
      .orderBy("search", "desc")
      .limit(limit)
      .get();

    const topSearches = [];
    querySnapshot.docs.forEach((doc) => {
      topSearches.push(doc.data());
    });
    if (topSearches.length > 0) {
      const requests = topSearches.map((search) =>
        axios.get(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${search.id}`
        )
      );

      const results = await axios.all(requests);

      return res.status(200).json(
        results.reduce((acc, currentValue) => {
          if (currentValue.data[0]) {
            acc.push(currentValue.data[0]);
          }
          return acc;
        }, [])
      );
    }
    return res.status(500).json({ message: "top search is empty" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const storeSearches = async (req, res) => {
  try {
    const searches = req.body.searches;
    const batch = admin.firestore().batch();

    searches.forEach((search) => {
      batch.set(
        admin.firestore().collection(collections.search).doc(search.id),
        search
      );
    });

    await batch.commit();
    return res.status(201).send("batch saved");
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
module.exports = {
  test,
  searchCat,
  getTopSearch,
  storeSearches,
};
