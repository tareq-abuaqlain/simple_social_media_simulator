const { getReplyQuery } = require('../../database/query');

const getReplyController = async (req, res) => {
  try {
    const { commentId } = req.params;
    const reply = await getReplyQuery(commentId);
    res.json(reply);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = getReplyController;
