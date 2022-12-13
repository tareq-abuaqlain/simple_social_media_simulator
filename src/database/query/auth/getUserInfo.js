const { getQuery } = require('../getQuery');

const getUserInfo = (email) => getQuery(`SELECT * FROM user WHERE email = '${email}'`, [email]);

module.exports = getUserInfo;
