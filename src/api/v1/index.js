var express = require("express");
var api = express.Router();

const authentication = require("./authentication");

api.use("/authentication", authentication);

module.exports = api;
