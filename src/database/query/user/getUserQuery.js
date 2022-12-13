const { getQuery } = require('../getQuery');

const getUserQuery = () => getQuery('SELECT * FROM user ORDER BY id DESC');

module.exports = getUserQuery;
