const express = require("express");
const cors = require("cors");
const helmet = require('helmet');
const mongoose = require('mongoose');

const middlewares = require("./middlewares.js");
const routes = require('./routes/index.js');

require("dotenv").config({ path: "./config.env" });

const app = express();
const DATABASE_CONNECTION = process.env.ATLAS_URI;
const port = process.env.PORT || 5000;

/** connect to MongoDB database*/
try {
	mongoose.connect(DATABASE_CONNECTION);
} catch(error) {
	console.log(error);
}

/** set up routes */

/** middlewares */
app.use(cors());
app.use(express.json());
app.use(helmet());

/** routes */
app.get('/', (_req, res) => {
	res.send('Hello world');
});
app.use('/api', routes);

/** handle errors */
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

/** start server */
app.listen(port, () => {
	// perform a database connection when server starts
	console.log(`Server is running on port: ${ port }`);
});