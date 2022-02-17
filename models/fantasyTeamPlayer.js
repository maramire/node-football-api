const mongoose = require("mongoose");
const { Schema } = mongoose;

const FantasyTeamPlayerSchema = new mongoose.Schema({
  fantasyTeam: { type: Schema.Types.ObjectId, ref: "FantasyTeam" },
  player: { type: Schema.Types.ObjectId, ref: "Player" },
  matchday: { type: Schema.Types.ObjectId, ref: "Matchday" },
  isCaptain: Boolean,
  isStarter: Boolean,
});

const FantasyTeamPlayer = mongoose.model(
  "FantasyTeamPlayer",
  FantasyTeamPlayerSchema,
  "fantasyTeamPlayers"
);
module.exports = FantasyTeamPlayer;
