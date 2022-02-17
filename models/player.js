const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlayerSchema = new mongoose.Schema(
  {
    name: String,
    code: Number,
    position: String,
    club_code: Number,
    value: Number,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

PlayerSchema.virtual("club", {
  ref: "Club",
  localField: "club_code",
  foreignField: "code",
  justOne: true,
});

const Player = mongoose.model("Player", PlayerSchema, "players");
module.exports = Player;
