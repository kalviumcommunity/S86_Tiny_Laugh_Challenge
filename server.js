const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// Define a simple /ping route
app.get("/ping", (req, res) => {
    res.json({ message: "Pong! Server is running." });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
