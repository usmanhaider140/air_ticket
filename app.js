require("dotenv").config();
const express = require("express");
const router = require("./routes");
const app = express();
const pool = require("./config/db");
require("./models");
// Connecting DB

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }
  if (connection) connection.release();
  return;
});

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
