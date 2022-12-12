const { postPostVersionsQuery } = require('../../database/query');

const postPostVersionsController = async (req, res) => {
  try {
    await postPostVersionsQuery();
    res.json({ message: 'post version added' });
  } catch (err) {
    res.json({ message: 'Internal server error' });
  }
};

module.exports = postPostVersionsController;
