const Player = require("../models/player");

// function that retrives players depending params
// params: (optional) teamId
exports.getPlayers = async (req, res) => {
  const teamId = req.query?.teamId;
  let players;
  if (!teamId) {
    players = await Player.find();
  } else {
    players = await Player.find({ team_code_id: teamId });
  }
  res.send(players);
};

// function that get player depending id
exports.getPlayer = async (req, res) => {
  const playerId = req.params?.playerId;
  const player = await Player.findById(playerId);
  res.send(player);
};

// function that update player
// params: (mandatory) _id
// body: (mandatory) player payload
exports.updatePlayer = async (req, res) => {
  const playerId = req.params?.playerId;
  const playerPayload = req.body;
  if (!playerId) {
    res.status(500).send({ error: "Cannot do that operation." });
  } else {
    const player = await Player.findOneAndUpdate(playerId, playerPayload, {
      new: true,
    });
    res.send({
      message: "Player update correctly.",
      player: player,
    });
  }
};
