const { getQuery } = require('../getQuery');

const deletePostQuery = (id, user_id) => getQuery(`DELETE FROM post WHERE id = "${id}" AND seen = 0 AND user_id = "${user_id}"  `, [id]);

module.exports = deletePostQuery;
