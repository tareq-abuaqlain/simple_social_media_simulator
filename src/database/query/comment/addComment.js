const { getQuery } = require('../getQuery');

const addCommentQuery = (comment_content, user_id, post_id) => getQuery(`INSERT INTO comment (comment_content, user_id, post_id) VALUES ("${comment_content}","${user_id}","${post_id}")`, [comment_content, user_id, post_id]);

module.exports = addCommentQuery;
