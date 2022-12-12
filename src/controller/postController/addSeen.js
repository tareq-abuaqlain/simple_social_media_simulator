const { addSeenQuery } = require('../../database/query');

const addSeenController = async (req, res) => {
  const { id } = req.params;
  try {
    await addSeenQuery(id);
    res.status(200).json({ message: 'One seen added' });
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

module.exports = addSeenController;
