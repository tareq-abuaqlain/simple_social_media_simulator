const connection = require('../../config/connection');

const getPostQuery = () => connection.query('SELECT * FROM post');

module.exports = getPostQuery;
