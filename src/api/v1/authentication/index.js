const express = require("express");
const bodyParser = require("body-parser");

const api = express.Router();

const dbConfig = require("./config/db");
const initial = require("./initial");

// parse requests of content-type - application/json
api.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
api.use(bodyParser.urlencoded({ extended: true }));
const db = require("./models");

db.mongoose
  .connect(
    `mongodb+srv://${dbConfig.USERNAME}:${dbConfig.PASSWORD}@${dbConfig.HOST}/${dbConfig.DB}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

require("./routes/auth")(api);
require("./routes/user")(api);

initial();

module.exports = api;
