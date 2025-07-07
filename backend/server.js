const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();
 
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); 
app.use(cors());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));


app.get("/ping", (req, res) => {
  res.json({ message: "Pong! Server is running." });
});

const videoRoutes = require('./Routes');
app.use('/api/videos', videoRoutes); 


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
