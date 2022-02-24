const utils = require("../utils/utils");
const User = require("../models/user");
const FantasyTeam = require("../models/fantasyTeam");

exports.handleLogin = async (req, res) => {
  const password = req.body.password;

  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, msg: "error in credentials." });
    }

    const userHash = user.hash;
    const userSalt = user.salt;
    const isValid = utils.validPassword(password, userHash, userSalt);

    if (isValid) {
      const tokenObject = utils.issueJWT(user);

      res.status(200).json({
        success: true,
        token: tokenObject.token,
        expiresIn: tokenObject.expires,
      });
    } else {
      res.status(401).json({ success: false, msg: "error in credentials." });
    }
  } catch {
    next(err);
  }
};

exports.handleRegister = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user)
    return res.json({ success: false, msg: "The user already exists." });

  const saltHash = utils.genPassword(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    username: req.body.username,
    hash: hash,
    salt: salt,
  });

  try {
    newUser.save().then((user) => {
      res.json({ success: true, user: user.username });
    });
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

exports.editUser = async (req, res) => {
  const userPayload = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      userPayload,
      {
        new: true,
      }
    );
    res.send({
      message: "User updated correctly.",
      user: user,
    });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
};
