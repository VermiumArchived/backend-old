const db = require("../../../../db/models");
const Matches = db.matches;

exports.matches = (req, res) => {
  Matches.find().exec((err, matches) => {
    let newMatches = [];
    matches.map((match) => {
      newMatches.push({
        id: match._id,
        date: match.date,
        lost: match.lost,
      });
    });

    console.log(newMatches);
    res.status(200).send(newMatches);
  });
};

exports.matchesByMatch = (req, res) => {
  Matches.findOne({ _id: req.params.match }).exec((err, match) => {
    let newMatch = { id: match._id, date: match.date, lost: match.lost };
    res.status(200).send(newMatch);
  });
};

exports.matchesNew = (req, res) => {
  const match = new Matches({
    date: new Date(),
    lost: req.body,
  });
  match.save((err, match) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    console.log("SAVED");
  });
  res.status(200).send({ "New match": match });
};
