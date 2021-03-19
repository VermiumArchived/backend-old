var express = require("express");
var api = express.Router();

const authentication = require("./authentication");
const user = require("./user");

api.use("/authentication", authentication);
api.use("/user", user);

module.exports = api;
