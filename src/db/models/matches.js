const mongoose = require("mongoose");

const Matches = mongoose.model(
  "Matches",
  new mongoose.Schema({
    date: Date,
    lost: Object,
  })
);

module.exports = Matches;
