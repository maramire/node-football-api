import * as utils from '../utils/utils.js';
import User from '../models/user.js';

export const handleLogin = async (req, res, next) => {
  const { password } = req.body;

  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, msg: 'error in credentials.' });
    }

    const userHash = user.hash;
    const userSalt = user.salt;
    const isValid = utils.validPassword(password, userHash, userSalt);

    if (isValid) {
      const tokenObject = utils.issueJWT(user);

      return res.status(200).json({
        success: true,
        token: tokenObject.token,
        expiresIn: tokenObject.expires,
      });
    }
    return res.status(401).json({ success: false, msg: 'error in credentials.' });
  } catch (err) {
    return next(err);
  }
};

export const handleRegister = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) return res.json({ success: false, msg: 'The user already exists.' });

  const saltHash = utils.genPassword(req.body.password);
  const { salt } = saltHash;
  const { hash } = saltHash;

  const newUser = new User({
    username: req.body.username,
    hash,
    salt,
  });

  try {
    return newUser.save().then((u) => {
      res.json({ success: true, user: u.username });
    });
  } catch (err) {
    return res.json({ success: false, msg: err });
  }
};

export const editUser = async (req, res) => {
  const userPayload = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      userPayload,
      {
        new: true,
      },
    );
    res.send({
      message: 'User updated correctly.',
      user,
    });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
};
