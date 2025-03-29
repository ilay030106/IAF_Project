const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.port;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.error("MongoDB error:", e));

const flightRoutes = require("./routes/flightData");

app.use("/api/flight", flightRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
