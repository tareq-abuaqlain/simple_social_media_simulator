const { addCommentQuery } = require('../../database/query');
const { commentValidation } = require('../../validation');
const { CustomError } = require('../../helpers');

const addCommentController = async (req, res, next) => {
  try {
    const { comment_content, user_id, post_id } = await commentValidation.validate(req.body, { abortEarly: false });
    await addCommentQuery(comment_content, user_id, post_id);
    return res.json({ message: 'Comment added successfully' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      // return next(new CustomError(400, error.errors));
      return next(new CustomError(400, error.errors));
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = addCommentController;
