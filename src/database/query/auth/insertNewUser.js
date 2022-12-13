const { getQuery } = require('../getQuery');

const insertNewUser = (username, email, hashedPassword) => getQuery(`INSERT INTO user (username , email , password) VALUES ("${username}" , "${email}" , "${hashedPassword}") `, [username, email, hashedPassword]);

module.exports = insertNewUser;
