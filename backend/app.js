require("dotenv").config({ path: "../.env" });
const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// Middleware
app.use(express.json());
let passw = process.env.MONGODB_PASSWORD;
// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://aaryan:" +
      passw +
      "@cluster0.ldq41v4.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB", error));

// Routes
app.use("/todos", todoRoutes);

module.exports = app;
