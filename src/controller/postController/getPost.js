const { getPostQuery } = require('../../database/query');

const getPostController = async (req, res) => {
  try {
    const data = await getPostQuery();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = getPostController;
