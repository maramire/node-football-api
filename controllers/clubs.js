const Club = require("../models/club");
const Player = require("../models/player");

exports.getClubs = async (req, res) => {
  const leagueId = req.query?.leagueId;
  let clubs;
  if (!leagueId) {
    clubs = await Club.find();
  } else {
    clubs = await Club.find({ league_id: leagueId });
  }

  res.send(clubs);
};

exports.getClubPlayers = async (req, res) => {
  const clubId = req.params?.clubId;
  if (!clubId) {
    res.status(500).send({ error: "Cannot do that operation." });
  } else {
    const club = await Club.findById(clubId);
    const id = club.club_id;
    const players = await Player.find({ team_code_id: id });
    res.send(players);
  }
};

// function that get club depending id
exports.getClub = async (req, res) => {
  const clubId = req.params?.clubId;
  const club = await Club.findById(clubId);
  res.send(club);
};
