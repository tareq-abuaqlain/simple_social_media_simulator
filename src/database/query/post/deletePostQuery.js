const { getQuery } = require('../getQuery');

const deletePostQuery = (id) => getQuery(`DELETE FROM post WHERE id = "${id}" AND seen = 0 `, [id]);

module.exports = deletePostQuery;
