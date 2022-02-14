const Season = require("../models/season");

exports.getSeasons = async (req, res) => {
  seasons = await Season.find();
  res.send(seasons);
};
