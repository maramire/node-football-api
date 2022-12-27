import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema(
  {
    name: String,
    code: Number,
    position: String,
    club_code: Number,
    value: Number,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    id: false,
  },
);

PlayerSchema.virtual('club', {
  ref: 'Club',
  localField: 'club_code',
  foreignField: 'code',
  justOne: true,
});

export default mongoose.model('Player', PlayerSchema, 'players');
