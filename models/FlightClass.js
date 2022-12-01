const pool = require("../config/db");
const createFlightClassTable = async () => {
  try {
    const sql = `CREATE TABLE IF NOT EXISTS flight_class (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`;
    const res = await pool.query(sql);
    if (res[0].affectedRows === 1) {
      console.log("Flight Class table created");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = createFlightClassTable();
