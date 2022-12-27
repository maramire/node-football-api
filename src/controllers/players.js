import dotenv from 'dotenv';
import Player from '../models/player.js';
import PlayerMatchStatistic from '../models/playerMatchStatistic.js';

dotenv.config();

export const getPlayers = async (req, res) => {
  let players;
  if (req.query?.position) {
    players = await Player.find({
      position: req.query.position,
      club_code: { $in: process.env.CLUBS.split(',') },
    }).populate('club');
    return res.send(players);
  }
  players = await Player.find().populate('club');
  return res.send(players);
};

export const getPlayer = async (req, res) => {
  const playerId = req.params?.playerId;
  const player = await Player.findById(playerId).populate('club');
  res.send(player);
};

export const updatePlayer = async (req, res) => {
  const playerId = req.params?.playerId;
  const playerPayload = req.body;
  if (!playerId) {
    res.status(500).send({ error: 'Cannot do that operation.' });
  } else {
    const player = await Player.findOneAndUpdate(
      { _id: playerId },
      playerPayload,
      {
        new: true,
      },
    );
    res.send({
      message: 'Player update correctly.',
      player,
    });
  }
};

export const updateMatchStatistics = async (req, res) => {
  const playerId = req.params?.playerId;
  const { matchId } = req.query;
  const statistic = await PlayerMatchStatistic.findOneAndUpdate(
    { player: playerId, match: matchId },
    req.body,
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: false,
    },
  );
  res.send({
    message: 'Statistic updated correctly.',
    statistic,
  });
};
