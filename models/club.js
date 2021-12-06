const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
  club_id: Number,
  club_shortname: String,
  league_id: Number,
  pais: Number,
  pais_club: String,
});

const Club = mongoose.model("Club", ClubSchema, "clubs");

module.exports = Club;
