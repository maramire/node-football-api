const Club = require("../models/club");
const Player = require("../models/player");

const getClubPlayersByPosition = async (club, positionRegex) => {
  return await Player.find({
    club_code: club.code,
    position: positionRegex,
  });
};

exports.getClubs = async (req, res) => {
  const clubs = await Club.find();
  res.send(clubs);
};

exports.getClubPlayers = async (req, res) => {
  const clubId = req.params?.clubId;
  if (!clubId) {
    res.status(500).send({ error: "Cannot do that operation." });
  } else {
    const club = await Club.findById(clubId);
    const goalkeepers = await getClubPlayersByPosition(club, /Portero/);
    const defenders = await getClubPlayersByPosition(club, /Defensa/);
    const midfielders = await getClubPlayersByPosition(club, /Mediocampista/);
    const strikers = await getClubPlayersByPosition(club, /Delantero/);
    res.send({
      goalkeepers,
      defenders,
      midfielders,
      strikers,
    });
  }
};

// function that get club depending id
exports.getClub = async (req, res) => {
  const clubId = req.params?.clubId;
  const club = await Club.findById(clubId);
  res.send(club);
};
