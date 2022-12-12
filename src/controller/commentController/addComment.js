const { addCommentQuery } = require('../../database/query');

const addCommentController = async (req, res) => {
  try {
    const { comment_content, user_id, post_id } = req.body;
    await addCommentQuery(comment_content, user_id, post_id);
    res.json({ message: 'Comment added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = addCommentController;
