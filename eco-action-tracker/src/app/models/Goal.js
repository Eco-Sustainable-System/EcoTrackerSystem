const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  target: { type: Number, required: true }, // Target value (e.g., use public transport X times)
  currentProgress: { type: Number, default: 0 }, // User’s progress
  completionDate: { type: Date }
});

module.exports = mongoose.model('Goal', goalSchema);
