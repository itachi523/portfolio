require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Project = require("./models/Project");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB database"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});