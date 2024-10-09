const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['personal', 'community'], default: 'personal' },
  progress: { type: Number, default: 0 }, // Progress percentage
  goal: { type: Number, required: true }, // Goal (e.g., number of bottles saved)
  usersParticipating: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Challenge', challengeSchema);
