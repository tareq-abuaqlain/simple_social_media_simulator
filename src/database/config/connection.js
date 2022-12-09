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
// const sql = 'SELECT * FROM user';
// pool.execute((err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('Connected to the MySQL server.');
// });

// require('dotenv').config();
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'project2',
//   password: 'root',
// });

// // eslint-disable-next-line consistent-return
// connection.connect((err) => {
//   if (err) {
//     return console.error(`error: ${err.message}`);
//   }
//   console.log('Connected to the MySQL server.');
// });
// module.exports = connection;
