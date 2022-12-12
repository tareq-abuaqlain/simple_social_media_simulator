const { getQuery } = require('../getQuery');

const getPostVersionsQuery = (postId) => getQuery(`SELECT * FROM one_post_version where post_id = ${postId}`, [postId]);

module.exports = getPostVersionsQuery;
