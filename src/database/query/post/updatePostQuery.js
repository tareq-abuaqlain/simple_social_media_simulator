const connection = require('../../config/connection');

const updatePostQuery = (post_content, post_version, id) => connection.query('UPDATE post SET post_content = ?, post_version = post_version +1  WHERE id = ?', [post_content, post_version, id]);

module.exports = updatePostQuery;
