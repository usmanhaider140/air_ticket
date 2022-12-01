const pool = require("../config/db");

const createPassengerTable = async () => {
  try {
    const sql = `
            CREATE DATABASE IF NOT EXISTS sql_flight;
            USE sql_flight; 
            CREATE TABLE IF NOT EXISTS passenger (
            id INT AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(255) NOT NULL,
            passport_number VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`;
    const res = await pool().query(sql);
    if (res[0].affectedRows === 1) {
      console.log("Passenger table created");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = createPassengerTable();
