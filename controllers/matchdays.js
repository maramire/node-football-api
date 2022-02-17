const Matchday = require("../models/matchday");

exports.createMatchday = async (req, res) => {
  const newMatchday = new Matchday(req.body);
  try {
    newMatchday.save().then((matchday) => {
      res.json({ success: true, matchday });
    });
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};
