const { getQuery } = require('../getQuery');

const getCommentQuery = (postId) => getQuery(`SELECT * FROM comment where comment.post_id = ${postId}`, [postId]);

module.exports = getCommentQuery;
