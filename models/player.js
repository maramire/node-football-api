const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  player_code: Number,
  player_name: String,
  player_nation: String,
  player_position: String,
  player_int_caps: Number,
  player_int_goals: Number,
  player_birthday: Date,
  player_joined_date: Date,
  team_rep: Number,
  player_cur: Number,
  player_rep: Number,
  team_code_id: Number,
});

// thir argument is collection name
const Player = mongoose.model("Player", PlayerSchema, "players");

module.exports = Player;
