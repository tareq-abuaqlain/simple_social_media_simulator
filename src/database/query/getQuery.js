const connection = require('../config/connection');

const getQuery = (query) => new Promise((resolve, reject) => {
  connection.query(query, (err, data) => {
    if (err) {
      return reject(err);
    }
    return resolve(data);
  });
});

module.exports = { getQuery };
