const { getQuery } = require('../getQuery');

// const getPostQuery = () => getQuery('SELECT post_content , post_version , num_of_watches FROM post LEFT JOIN watch ON post.id = watch.post_id');
// const getPostQuery = () => getQuery('SELECT * FROM post ORDER BY RAND() LIMIT 100');
const getPostQuery = () => getQuery('SELECT * FROM( SELECT * FROM post ORDER BY id DESC LIMIT 500) Var1 ORDER BY RAND() LIMIT 100; ');

module.exports = getPostQuery;
