import mongoose from 'mongoose';

const { Schema } = mongoose;

const FantasyTeamSchema = new mongoose.Schema({
  name: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model(
  'FantasyTeam',
  FantasyTeamSchema,
  'fantasyTeams',
);
