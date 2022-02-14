const mongoose = require("mongoose");
const { Schema } = mongoose;

const SeasonSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
});

const Season = mongoose.model("Season", SeasonSchema, "seasons");
module.exports = Season;
