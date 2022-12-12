const { getQuery } = require('../getQuery');

const addReplyToReplyQuery = (reply_to_reply_content, reply_id, user_id) => getQuery(`INSERT INTO reply_to_reply (reply_to_reply_content, reply_id, user_id) VALUES ("${reply_to_reply_content}", "${reply_id}", "${user_id}")`, [reply_to_reply_content, reply_id, user_id]);

module.exports = addReplyToReplyQuery;
