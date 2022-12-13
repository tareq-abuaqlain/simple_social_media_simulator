const { getQuery } = require('../getQuery');

const getUserByEmail = (email) => getQuery(`SELECT email FROM user WHERE email = '${email}'`, [email]);

module.exports = getUserByEmail;
