const Club = require("../models/club");

exports.getClubs = async (req, res) => {
  const leagueId = req.query?.leagueId;
  let clubs;
  if (!leagueId) {
    clubs = await Club.find();
  } else {
    clubs = await Club.find({ league_id: leagueId });
  }

  res.send(clubs);
};
