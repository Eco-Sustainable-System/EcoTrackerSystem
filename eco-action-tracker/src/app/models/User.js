const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["individual", "admin"], default: "individual" },
  ecoGoals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Goal" }],
  badges: [String],
  CO2Reduction: { type: Number, default: 0 }, // Cumulative CO2 reduction
  ecoActions: [{ type: String, default: [] }], // Log of eco-friendly actions
});

module.exports = mongoose.model("User", userSchema);
