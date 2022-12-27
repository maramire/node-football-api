import mongoose from 'mongoose';

const { Schema } = mongoose;

const MatchdaySchema = new mongoose.Schema({
  name: String,
  round: Number,
  startDate: Date,
  season: { type: Schema.Types.ObjectId, ref: 'Season' },
});

export default mongoose.model('Matchday', MatchdaySchema, 'matchdays');
