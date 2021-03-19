const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user");
db.role = require("./role");
db.matches = require("./matches");

db.ROLES = ["user", "admin", "moderator", "school", "teacher"];

module.exports = db;
