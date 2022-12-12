const { getQuery } = require('../getQuery');

const date_created = new Date().toLocaleDateString();

const addPostQuery = (post_content, user_id) => getQuery(`INSERT INTO post (post_content, user_id , date_created) VALUES ("${post_content}",${user_id} , "${date_created}")`, [post_content, user_id, date_created]);

module.exports = addPostQuery;
