const { getQuery } = require('../getQuery');

const getUserQuery = () => getQuery('SELECT * FROM user');

module.exports = getUserQuery;
