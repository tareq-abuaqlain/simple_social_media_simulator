const { getUserQuery } = require('../../database/query');

const getUserController = async (req, res) => {
  try {
    const data = await getUserQuery();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = getUserController;
