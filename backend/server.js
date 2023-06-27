const app = require("./app");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Apply the cors middleware
app.use(cors({ origin: "http://127.0.0.1:5174" }));

// app.use(cors({ origin: "http://127.0.0.1:5174" }));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//
