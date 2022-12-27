import mongoose from 'mongoose';

const SeasonSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
});

export default mongoose.model('Season', SeasonSchema, 'seasons');
