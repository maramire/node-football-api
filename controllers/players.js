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
