const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    picture: { type: String },
    profileImage: {
      type: String,
    },
    role: {
      type: String,
      enum: ["individual", "admin"],
      default: "individual",
    },
    goals: [{ type: ObjectId, ref: "Goals" }],
    badges: [String],
    CO2Reduction: { type: Number, default: 0 },
    ecoActions: [{ type: String, default: [] }],
    points: {
      type: Number,
      default: 0,
    },
    totalEnergyGenerated: {
      type: Number,
      default: 0,
    },
    totalCO2Reduction: {
      type: Number,
      default: 0,
    },
    currentChallenges: [{ type: ObjectId, ref: "Challenges" }],
    completedChallenges: [{ type: ObjectId, ref: "Challenges" }],
    activityLog: [{ type: ObjectId, ref: "ActivityLog" }],
    reminders: [{ type: String }],
    googleId: { type: String, unique: true },
    bikes: [{ type: String }],
    redeemedRewards: [{ type: ObjectId, ref: "Rewards" }],
    savedEnergy: Number,
    followers: [{ type: ObjectId, ref: "User" }],
    posts: [{ type: ObjectId, ref: "Post" }],
    active: { type: Boolean, default: true }, // Add this line
  },
  { timestamps: true }
);

const User =
  mongoose.models.User || mongoose.model("User", userSchema, "Users");

export default User;
