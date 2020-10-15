const functions = require("firebase-functions");
const server = require("./src");
const api = functions
  .runWith({
    memory: "2GB",
    timeoutSeconds: 120,
  })
  .https.onRequest(server);

module.exports = { api };
