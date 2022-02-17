const mongoose = require("mongoose");
const { Schema } = mongoose;

const MatchdaySchema = new mongoose.Schema({
  name: String,
  round: Number,
  startDate: Date,
  season: { type: Schema.Types.ObjectId, ref: "Season" },
});

const Matchday = mongoose.model("Matchday", MatchdaySchema, "matchdays");
module.exports = Matchday;
