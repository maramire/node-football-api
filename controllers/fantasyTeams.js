const FantasyTeam = require("../models/fantasyTeam");

exports.createFantasyTeam = async (req, res) => {
  const userAlreadyHasTeam = await FantasyTeam.findOne({ user: req.user._id });
  const fantasyTeamExists = await FantasyTeam.findOne({ name: req.body.name });

  if (userAlreadyHasTeam)
    return res.json({ success: false, msg: "You can't create another team." });

  if (fantasyTeamExists)
    return res.json({
      success: false,
      msg: "The fantasy team name is already used.",
    });

  const newFantasyTeam = new FantasyTeam({
    name: req.body.name,
    user: req.user._id,
  });

  try {
    newFantasyTeam.save().then((fantasyTeam) => {
      res.json({ success: true, user: fantasyTeam });
    });
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

exports.editFantasyTeam = async (req, res) => {
  const fantasyTeamPayload = req.body;
  try {
    const fantasyTeam = await FantasyTeam.findOneAndUpdate(
      { _id: req.params.fantasyTeamId },
      fantasyTeamPayload,
      {
        new: true,
      }
    );
    res.send({
      message: "Fantasy Team updated correctly.",
      fantasyTeam,
    });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
};
