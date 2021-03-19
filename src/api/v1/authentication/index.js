const express = require("express");
const bodyParser = require("body-parser");

const api = express.Router();

const initial = require("./initial");
const dbConnection = require("./dbConnection");

// parse requests of content-type - application/json
api.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
api.use(bodyParser.urlencoded({ extended: true }));

dbConnection();

require("./routes")(api);

initial();

module.exports = api;
