const { deletePostQuery } = require('../../database/query');

const deletePostController = async (req, res) => {
  const { id } = req.params;
  const user_id = req.userId;

  try {
    const data = await deletePostQuery(id, user_id);
    if (data.affectedRows === 0) return res.status(400).json({ message: 'Cannot delete post' });
    return res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = deletePostController;
