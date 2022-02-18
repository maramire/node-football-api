const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerMatchStatisticPlayerSchema = new mongoose.Schema({
  player: { type: Schema.Types.ObjectId, ref: "Player" },
  match: { type: Schema.Types.ObjectId, ref: "Match" },
  goals: Number,
  assists: Number,
  yellowCards: Number,
  redCards: Number,
  minutesPlayed: Number,
  saves: Number,
  penaltySaves: Number,
  penaltyMisses: Number,
  isManOfTheMatch: Boolean,
  ownGoals: Number,
});

const PlayerMatchStatisticPlayer = mongoose.model(
  "PlayerMatchStatisticPlayer",
  PlayerMatchStatisticPlayerSchema,
  "playerMatchStatistics"
);
module.exports = PlayerMatchStatisticPlayer;
