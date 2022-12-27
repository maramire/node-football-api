import mongoose from 'mongoose';

const { Schema } = mongoose;

const PlayerMatchStatisticSchema = new mongoose.Schema({
  player: { type: Schema.Types.ObjectId, ref: 'Player' },
  match: { type: Schema.Types.ObjectId, ref: 'Match' },
  goals: Number,
  assists: Number,
  yellowCards: Number,
  redCards: Number,
  minutesPlayed: Number,
  saves: Number,
  penaltySaves: Number,
  penaltyMisses: Number,
  isManOfTheMatch: Boolean,
  ownGoals: Number,
});

export default mongoose.model(
  'PlayerMatchStatistic',
  PlayerMatchStatisticSchema,
  'playerMatchStatistics',
);
