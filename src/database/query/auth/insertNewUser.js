const { getQuery } = require('../getQuery');

const insertNewUser = (username, email, hashedPassword) => getQuery(`INSERT INTO user (username , email , password) VALUES ("${username}" , "${email}" , "${hashedPassword}") `, [username, email, hashedPassword]);

const getLastId = () => getQuery('SELECT * FROM user WHERE id = LAST_INSERT_ID();');

module.exports = { getLastId, insertNewUser };
