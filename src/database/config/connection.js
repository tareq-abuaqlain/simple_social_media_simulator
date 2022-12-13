require('dotenv').config();
const mysql = require('mysql');

const { DB_PASS } = process.env;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'express',
  password: DB_PASS,
});

connection.connect((err) => {
  if (err) {
    return console.error(`error: ${err.message}`);
  }
  return console.log('Connected to the MySQL server.');
});

module.exports = connection;
