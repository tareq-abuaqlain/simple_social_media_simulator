const userValidation = require('./userValidation');
const postValidation = require('./postValidation');
const commentValidation = require('./commentValidation');
const replyValidation = require('./replyValidation');
const replyToReplyValidation = require('./replyToReplyValidation');

module.exports = {
  userValidation,
  postValidation,
  commentValidation,
  replyValidation,
  replyToReplyValidation,
};
