import mongoose from 'mongoose';

const ClubSchema = new mongoose.Schema({
  name: String,
  code: Number,
});

export default mongoose.model('Club', ClubSchema, 'clubs');
