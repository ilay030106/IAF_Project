const mongoose = require("mongoose");

const flightScheme = new mongoose.Schema(
  {
    altitude: { type: Number, required: true, min: 0, max: 3000 },
    his: { type: Number, required: true, min: 0, max: 360 },
    adi: { type: Number, required: true, min: -100, max: 100 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flight", flightScheme);
