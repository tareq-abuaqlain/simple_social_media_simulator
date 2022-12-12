const { getPostVersionsQuery } = require('../../database/query');

const getPostVersionsController = async (req, res) => {
  try {
    const { postId } = req.params;
    const data = await getPostVersionsQuery(postId);
    res.json(data);
  } catch (err) {
    res.json({ message: 'Internal server error' });
  }
};

module.exports = getPostVersionsController;
