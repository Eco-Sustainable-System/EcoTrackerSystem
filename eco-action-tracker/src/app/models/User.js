const mongoose = require("mongoose");

const userSschema = new mongoose.Schema({
  firstName: { type: String,  },
  lastName: { type: String, },
  email: { type: String,  unique: true },
  password: { type: String, },
  role: { type: String, enum: ["individual", "admin"], default: "individual" },
  ecoGoals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Goal" }],
  badges: [String],
  CO2Reduction: { type: Number, default: 0 }, // Cumulative CO2 reduction
  ecoActions: [{ type: String, default: [] }], // Log of eco-friendly actions
});

const User = mongoose.models.User || mongoose.model("User", userSschema,"Users");

export default User;
