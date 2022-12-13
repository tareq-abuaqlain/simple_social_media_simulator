const { getQuery } = require('../getQuery');

const getPostQuery = () => getQuery('SELECT * FROM( SELECT * FROM post ORDER BY id DESC LIMIT 500) Var1 ORDER BY RAND() LIMIT 100; ');

module.exports = getPostQuery;
