const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  favoriteClub: { type: mongoose.Schema.Types.ObjectId, ref: "Club" },
  username: String,
  hash: String,
  salt: String,
});

const User = mongoose.model("User", UserSchema, "users");
module.exports = User;
