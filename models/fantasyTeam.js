const mongoose = require("mongoose");
const { Schema } = mongoose;

const FantasyTeamSchema = new mongoose.Schema({
  name: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const FantasyTeam = mongoose.model(
  "FantasyTeam",
  FantasyTeamSchema,
  "fantasyTeams"
);
module.exports = FantasyTeam;
