const connection = require('../../config/connection');

const addUserQuery = (username, email, password) => connection.query('INSERT INTO user (username, email, password) VALUES (?,?,?)', [username, email, password]);

module.exports = addUserQuery;
