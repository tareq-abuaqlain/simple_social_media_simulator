const { updatePostQuery } = require('../../database/query');

const updatePostController = async (req, res, next) => {
  const { id } = req.params;
  const { post_content } = req.body;
  try {
    await updatePostQuery(post_content, id);
    res.json({ message: 'Post updated successfully' });
  } catch (error) {
    console.log('error: ', error);
    next(error);
  }
};

module.exports = updatePostController;
