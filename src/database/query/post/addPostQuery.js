const connection = require('../../config/connection');

const addPostQuery = (post_content, post_version, user_id) => connection.query('INSERT INTO post (post_content, post_version, user_id) VALUES (?,?,?)', [post_content, post_version, user_id]);
// const addPostQuery = () => connection.query('INSERT INTO post (post_content, post_version, user_id) VALUES (1, 2, 1)');

module.exports = addPostQuery;
