const { addPostQuery } = require('../../database/query');

const addPostController = async (req, res) => {
  try {
    const { post_content, post_version, user_id } = req.body;
    await addPostQuery(post_content, post_version, user_id);
    res.json({ message: 'Post added successfully' });
    // res.json({ post_content, post_version, user_id });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = addPostController;
