const express = require("express");
const router = express.Router();
const FlightData = require("../models/flight_data_format");

// adding new flight to mongoDB and checking if valid
router.post("/", async (req, res) => {
  try {
    const { altitude, his, adi } = req.body;
    const newFlight = new FlightData({ altitude, his, adi });
    await newFlight.save();
    res.status(201).json(newFlight);
  } catch (error) {
    res.status(400).json({ message: "Invalid input", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const recent = await FlightData.findOne().sort({ createdAt: -1 });
    res.json(recent);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data" });
  }
});

module.exports = router;
