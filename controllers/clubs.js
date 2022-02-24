const Club = require("../models/club");
const Player = require("../models/player");

exports.getClubs = async (req, res) => {
  const clubs = await Club.find({ code: { $ne: 0 } });
  res.send(clubs);
};

exports.getClubPlayers = async (req, res) => {
  const clubId = req.params?.clubId;
  if (!clubId) {
    res.status(500).send({ error: "Cannot do that operation." });
  } else {
    const club = await Club.findById(clubId);
    const players = await Player.find({ club_code: club.code });
    res.send(players);
  }
};

// function that get club depending id
exports.getClub = async (req, res) => {
  const clubId = req.params?.clubId;
  const club = await Club.findById(clubId);
  res.send(club);
};
