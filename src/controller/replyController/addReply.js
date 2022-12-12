const { addReplyQuery } = require('../../database/query');
const { replyValidation } = require('../../validation');
const { CustomError } = require('../../helpers');

const addReplyController = async (req, res, next) => {
  try {
    const { reply_content, user_id, comment_id } = await replyValidation.validate(req.body, { abortEarly: false });
    await addReplyQuery(reply_content, user_id, comment_id);
    return res.json({ message: 'reply added successfully' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      // return next(new CustomError(400, error.errors));
      return next(new CustomError(400, error.errors));
    }
    return res.json({ message: 'Internal server error' });
  }
};

module.exports = addReplyController;
