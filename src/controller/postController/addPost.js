const { addPostQuery, getPostQuery } = require('../../database/query');

const date_created = new Date().toLocaleDateString();

const addPostController = async (req, res) => {
  try {
    const { post_content, user_id } = req.body;
    const data = await getPostQuery();
    if (data.filter((item0) => item0.user_id === user_id).map((item) => item.date_created).filter((item2) => item2 === date_created).length > 4) {
      return res.json({ message: 'You cannot add more than 5 posts per day' });
    }
    await addPostQuery(post_content, user_id);
    return res.json({ message: 'Post added successfully' });
  } catch (error) {
    console.log('error: ', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = addPostController;
