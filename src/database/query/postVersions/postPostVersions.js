const { getQuery } = require('../getQuery');

const postPostVersionsController = () => getQuery(` 
INSERT INTO one_post_version (post_id , post_content ,post_version) SELECT id , post_content ,post_version  FROM post`);

module.exports = postPostVersionsController;
