const Club = require("../models/club");

exports.getClubs = async (req, res) => {
  const country = req.query?.country;
  let clubs;
  if (!country) {
    clubs = await Club.find();
  } else {
    clubs = await Club.find({ pais_club: country });
  }

  res.send(clubs);
};
