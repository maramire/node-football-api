const Player = require("../models/player");
const Club = require("../models/club");

exports.getPlayers = async (req, res) => {
  players = await Player.find();
  res.send(players);
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
