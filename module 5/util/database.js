const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mydatabase@02",
  database: "node-complete",
});

module.exports = pool.promise();
