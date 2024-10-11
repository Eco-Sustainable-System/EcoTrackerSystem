const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  totalEnergyGenerated: {
    type: Number,
    default: 0,
  },
  currentUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  isAvailable: {
    type: Boolean,
    default: true,
  },
  qrCode: {
    type: String,
    required: true,
  },
  qrCodeFlag: {
    type: String,
    enum: ["scanned", "not scanned"],
    default: "not scanned",
  },
  location: {
    type: String,
    required: true,
  },
  regionUrl: {
    type: String,
    required: true,
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

module.exports = mongoose.model("Bike", bikeSchema);
