const pool = require("../config/db");

const createAirportTable = async () => {
  try {
    const sql = `
            CREATE DATABASE IF NOT EXISTS sql_flight;
            USE sql_flight;
            CREATE TABLE IF NOT EXISTS airport (
                id INT AUTO_INCREMENT PRIMARY KEY,
                Number VARCHAR(255) NOT NULL,
                DepartureDateTime DATETIME NOT NULL,
                ArrivalDateTime DATETIME NOT NULL,
                DurationInMinutes INT NOT NULL,
                DistanceInKilometers INT NOT NULL,
                DepartureAirportId INT NOT NULL,
                ArrivalAirportId INT NOT NULL,
                AirlineId INT NOT NULL,
                Foreign Key (DepartureAirportId) REFERENCES airport(id),
                Foreign Key (ArrivalAirportId) REFERENCES airport(id),
                Foreign Key (AirlineId) REFERENCES airline(id),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`;

    const res = await pool.query(sql);
    if (res[0].affectedRows === 1) {
      console.log("Airport table created");
    }
  } catch (error) {
    console.log(error);
  }
};
