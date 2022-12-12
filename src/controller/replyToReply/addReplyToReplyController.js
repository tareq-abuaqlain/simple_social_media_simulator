const { addReplyToReplyQuery } = require('../../database/query');

const addReplyToReplyController = async (req, res) => {
  try {
    const { reply_to_reply_content, reply_id, user_id } = req.body;
    await addReplyToReplyQuery(reply_to_reply_content, reply_id, user_id);
    res.json({ message: 'Reply to reply added successfully' });
  } catch (err) {
    res.json({ message: 'Internal server error' });
  }
};

module.exports = addReplyToReplyController;
