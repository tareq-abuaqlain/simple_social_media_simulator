const { getQuery } = require('../getQuery');

const updatePostQuery = (post_content, id, user_id) => getQuery(`UPDATE post SET post_content = "${post_content}" , post_version=post_version+1 WHERE id = "${id}" AND user_id = "${user_id}";
`, [post_content, id]);

module.exports = updatePostQuery;
