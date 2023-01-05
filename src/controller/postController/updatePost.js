const { updatePostQuery, postPostVersionsQuery } = require('../../database/query');

const updatePostController = async (req, res, next) => {
  const { id } = req.params;
  const { post_content } = req.body;
  const user_id = req.userId;
  try {
    const data = await updatePostQuery(post_content, id, user_id);
    if (data.affectedRows === 0) {
      res.status(404).json({ error: 'Post cannot updated' });
    } else {
      await postPostVersionsQuery();
      res.json({ message: 'Post updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
    next(error);
  }
};

module.exports = updatePostController;
