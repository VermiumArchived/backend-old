var express = require("express");
var api = express.Router();

const authentication = require("./authentication");
const user = require("./user");
const school = require("./school");

api.use("/authentication", authentication);
api.use("/user", user);
api.use("/school", school);

module.exports = api;
