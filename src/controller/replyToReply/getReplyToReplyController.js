const { getReplyToReplyQuery } = require('../../database/query');

const getReplyToReplyController = async (req, res) => {
  try {
    const { replyId } = req.params;
    const replyToReply = await getReplyToReplyQuery(replyId);
    res.json(replyToReply);
  } catch (err) {
    res.json({ message: 'Internal server error' });
  }
};

module.exports = getReplyToReplyController;
