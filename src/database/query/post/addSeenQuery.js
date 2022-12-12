const { getQuery } = require('../getQuery');

const addSeenQuery = (postId) => getQuery(`UPDATE post SET seen = seen + 1 WHERE id = ${postId}`, [postId]);

module.exports = addSeenQuery;
