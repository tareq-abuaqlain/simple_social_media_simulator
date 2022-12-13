const { getCommentQuery } = require('../../database/query');

const getCommentController = async (req, res) => {
  const { postId } = req.params;
  try {
    const data = await getCommentQuery(postId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
module.exports = getCommentController;
