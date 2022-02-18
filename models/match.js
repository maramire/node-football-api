const mongoose = require("mongoose");
const { Schema } = mongoose;

const MatchSchema = new mongoose.Schema({
  homeClub: { type: Schema.Types.ObjectId, ref: "Club" },
  awayClub: { type: Schema.Types.ObjectId, ref: "Club" },
  homeGoals: Number,
  awayGoals: Number,
  matchday: { type: Schema.Types.ObjectId, ref: "Matchday" },
});

const Match = mongoose.model("Match", MatchSchema, "matches");
module.exports = Match;
