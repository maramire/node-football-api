import FantasyTeam from '../models/fantasyTeam.js';
import FantasyTeamPlayer from '../models/fantasyTeamPlayer.js';

export const createFantasyTeam = async (req, res) => {
  const userAlreadyHasTeam = await FantasyTeam.findOne({ user: req.user._id });
  const fantasyTeamExists = await FantasyTeam.findOne({ name: req.body.name });

  if (userAlreadyHasTeam) return res.json({ success: false, msg: "You can't create another team." });

  if (fantasyTeamExists) {
    return res.json({
      success: false,
      msg: 'The fantasy team name is already used.',
    });
  }

  const newFantasyTeam = new FantasyTeam({
    name: req.body.name,
    user: req.user._id,
  });

  try {
    return newFantasyTeam.save().then((fantasyTeam) => {
      res.json({ success: true, user: fantasyTeam });
    });
  } catch (err) {
    return res.json({ success: false, msg: err });
  }
};

export const editFantasyTeam = async (req, res) => {
  const fantasyTeamPayload = req.body;
  try {
    const fantasyTeam = await FantasyTeam.findOneAndUpdate(
      { _id: req.params.fantasyTeamId },
      fantasyTeamPayload,
      {
        new: true,
      },
    );
    res.send({
      message: 'Fantasy Team updated correctly.',
      fantasyTeam,
    });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
};

export const createFantasyTeamPlayer = async (req, res) => {
  const playerAlreadyInMatchday = await FantasyTeamPlayer.findOne({
    player: req.body.player,
    matchday: req.body.matchday,
  });
  if (playerAlreadyInMatchday) return res.json({ success: false, msg: 'Player already in matchday.' });

  const newFantasyTeamPlayer = new FantasyTeamPlayer({
    ...req.body,
    fantasyTeam: req.params.fantasyTeamId,
  });
  try {
    return newFantasyTeamPlayer.save().then((fantasyTeamPlayer) => {
      res.json({ success: true, fantasyTeamPlayer });
    });
  } catch (err) {
    return res.json({ success: false, msg: err });
  }
};

export const getFantasyTeamPlayers = async (req, res) => {
  const fantasyTeamId = req.params?.fantasyTeamId;
  const matchday = req.query.matchdayId;
  const players = await FantasyTeamPlayer.find(
    {
      fantasyTeam: fantasyTeamId,
      matchday,
    },
    'isStarter player',
  ).populate('player');
  res.send(players);
};

export const getFantasyTeam = async (req, res) => {
  try {
    const fantasyTeam = await FantasyTeam.findOne({ user: req.user._id });
    res.json(fantasyTeam);
  } catch (err) {
    res.json({ success: false });
  }
};
