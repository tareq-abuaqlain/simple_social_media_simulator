const { getQuery } = require('../getQuery');

const addReplyQuery = (reply_content, user_id, comment_id) => getQuery(`INSERT INTO reply (reply_content , user_id , comment_id) VALUES ('${reply_content}' , '${user_id}' , '${comment_id}')`, [reply_content, user_id, comment_id]);

module.exports = addReplyQuery;
