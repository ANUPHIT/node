// db.js
const mysql = require("mysql2");

// Database connection details
const db = mysql.createConnection({
  host: "database-3.cpuu46aomuxg.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Anup456anup",
  port: "3306",
  database: "anup",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

module.exports = db;
