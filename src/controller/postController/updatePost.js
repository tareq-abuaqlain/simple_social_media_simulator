const updatePostQuery = require('../../database/query');

const updatePostController = async (req, res, next) => {
  const { id } = req.params;
  const { post_content, post_version } = req.body;
  try {
    const { rows } = await updatePostQuery(post_content, post_version, id);
    res.json(rows);
  } catch (error) {
    console.log('error: ', error);
    next(error);
  }
};

module.exports = updatePostController;
