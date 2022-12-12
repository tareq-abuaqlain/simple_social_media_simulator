const { getQuery } = require('../getQuery');

const getReplyQuery = (commentId) => getQuery(`SELECT * FROM reply WHERE comment_id = ${commentId}`, [commentId]);

module.exports = getReplyQuery;
