const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClubSchema = new mongoose.Schema({
  name: String,
  code: Number,
});

const Club = mongoose.model("Club", ClubSchema, "clubs");
module.exports = Club;
