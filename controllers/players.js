const Player = require("../models/player");
const Club = require("../models/club");
const PlayerMatchStatistic = require("../models/playerMatchStatistic");
require("dotenv").config();

exports.getPlayers = async (req, res) => {
  let players;
  if (req.query?.position) {
    players = await Player.find({
      position: req.query.position,
      club_code: { $in: process.env.CLUBS.split(",") },
    }).populate("club");
    return res.send(players);
  }
  players = await Player.find();
  return res.send(players);
};

exports.getPlayer = async (req, res) => {
  const playerId = req.params?.playerId;
  const player = await Player.findById(playerId).populate("club");
  res.send(player);
};

exports.updatePlayer = async (req, res) => {
  const playerId = req.params?.playerId;
  const playerPayload = req.body;
  if (!playerId) {
    res.status(500).send({ error: "Cannot do that operation." });
  } else {
    const player = await Player.findOneAndUpdate(
      { _id: playerId },
      playerPayload,
      {
        new: true,
      }
    );
    res.send({
      message: "Player update correctly.",
      player: player,
    });
  }
};

exports.updateMatchStatistics = async (req, res) => {
  const playerId = req.params?.playerId;
  const matchId = req.query.matchId;
  const statistic = await PlayerMatchStatistic.findOneAndUpdate(
    { player: playerId, match: matchId },
    req.body,
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: false,
    }
  );
  res.send({
    message: "Statistic updated correctly.",
    statistic,
  });
};
