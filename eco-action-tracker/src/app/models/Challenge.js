// models/challenge.js

import mongoose from "mongoose";

const ChallengeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    targetEnergy: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    startHour: {
      type: String, // You can change this to Date if you prefer a complete timestamp
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    endHour: {
      type: String, // Same as above
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["upcoming", "active", "completed", "canceled"],
      default: "upcoming",
    },
    progress: {
      type: Number,
      default: 0,
    },
    delete: {
      type: Boolean,
      default: false, // Indicates if the challenge is deleted (soft delete)
    },
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt fields

const Challenge =
  mongoose.models.Challenge || mongoose.model("Challenge", ChallengeSchema);

export default Challenge;
