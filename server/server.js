const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require('helmet');
const mongoose = require('mongoose');
const middlewares = require("./middlewares");

require("dotenv").config({ path: "./config.env" });

const DATABASE_CONNECTION = process.env.ATLAS_URI;

try {
	mongoose.connect(DATABASE_CONNECTION);
} catch(error) {
	console.log(error);
}

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(helmet());

app.get('/', (_req, res) => {
	res.send('Hello world');
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, () => {
	// perform a database connection when server starts
	console.log(`Server is running on port: ${ port }`);
});