const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const cors = require('cors');
const routes = require('./routes');
const app = express();

admin.initializeApp(functions.config().firebase);
admin.firestore().settings({ timestampsInSnapshots: true });
const errorHandler = (err, req, res, next) => {
	res.status(500).json({
		error: 'Internal Error'
	});
	functions.logger.error(err);
	next();
};
app
	.use(cors({ origin: true }))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))
	.use('/', routes)
	.get('*', (_, res) =>
		res.status(404).json({ message: 'endpoint not found.' })
	)
	.use(errorHandler);

module.exports = { app };
