import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  favoriteClub: { type: mongoose.Schema.Types.ObjectId, ref: 'Club' },
  username: String,
  hash: String,
  salt: String,
});

export default mongoose.model('User', UserSchema, 'users');
