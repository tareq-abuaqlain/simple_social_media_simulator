const { addReplyQuery } = require('../../database/query');

const addReplyController = async (req, res) => {
  try {
    const { reply_content, user_id, comment_id } = req.body;
    await addReplyQuery(reply_content, user_id, comment_id);
    res.json({ message: 'reply added successfully' });
  } catch (err) {
    res.json({ message: 'Internal server error' });
  }
};

module.exports = addReplyController;
