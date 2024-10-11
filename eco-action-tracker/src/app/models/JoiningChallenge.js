const mongoose = require("mongoose");

const joiningChallengeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  challengeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Challenges",
    required: true,
  },
  bikeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bikes",
    required: true,
  },
  status: {
    type: String,
    enum: ["inProgress", "completed", "expired"],
    default: "inProgress",
  },
  avgProgress: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("JoiningChallenge", joiningChallengeSchema);
