import Season from '../models/season.js';

// eslint-disable-next-line import/prefer-default-export
export const getSeasons = async (_req, res) => {
  const seasons = await Season.find();
  res.send(seasons);
};
