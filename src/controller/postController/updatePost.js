const { updatePostQuery, postPostVersionsQuery } = require('../../database/query');

const updatePostController = async (req, res, next) => {
  const { id } = req.params;
  const { post_content } = req.body;
  try {
    await updatePostQuery(post_content, id);
    await postPostVersionsQuery();
    res.json({ message: 'Post updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
    next(error);
  }
};

module.exports = updatePostController;
