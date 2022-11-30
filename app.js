require("dotenv").config();
const express = require("express");
const router = require("./routes");
const app = express();

// Connecting DB

// Middleware
app.use(express.json());

// Global Error Handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something failed.");
});

// Routes
app.use("/", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
