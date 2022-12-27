import Matchday from '../models/matchday.js';
import Match from '../models/match.js';

export const createMatchday = async (req, res) => {
  const newMatchday = new Matchday(req.body);
  try {
    newMatchday.save().then((matchday) => {
      res.json({ success: true, matchday });
    });
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};

export const createMatch = async (req, res) => {
  const newMatch = new Match({ ...req.body, matchday: req.params.matchdayId });
  try {
    newMatch.save().then((match) => {
      res.json({ success: true, match });
    });
  } catch (err) {
    res.json({ success: false, msg: err });
  }
};
