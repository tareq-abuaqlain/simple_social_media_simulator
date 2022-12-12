const { getQuery } = require('../getQuery');

const getReplyToReplyQuery = (replyId) => getQuery(`SELECT * FROM reply_to_reply WHERE reply_id = "${replyId}"`, [replyId]);

module.exports = getReplyToReplyQuery;
