const { addReplyToReplyQuery } = require('../../database/query');
const { replyToReplyValidation } = require('../../validation');
const { CustomError } = require('../../helpers');

const addReplyToReplyController = async (req, res, next) => {
  try {
    const user_id = req.userId;
    const reply_id = req.params.replyId;
    const { reply_to_reply_content } = await replyToReplyValidation.validate(req.body, { abortEarly: false });
    await addReplyToReplyQuery(reply_to_reply_content, reply_id, user_id);
    return res.json({ message: 'Reply to reply added successfully' });
  } catch (error) {
    console.log('error: ', error);
    if (error.name === 'ValidationError') {
      return next(new CustomError(400, error.errors));
    }
    return res.json({ message: 'Internal server error' });
  }
};

module.exports = addReplyToReplyController;
