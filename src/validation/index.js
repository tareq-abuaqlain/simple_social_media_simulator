const userValidation = require('./userValidation');
const postValidation = require('./postValidation');
const commentValidation = require('./commentValidation');
const replyValidation = require('./replyValidation');
const replyToReplyValidation = require('./replyToReplyValidation');
const loginValidation = require('./loginValidation');
const signUpValidation = require('./signUpValidation');

module.exports = {
  userValidation,
  postValidation,
  commentValidation,
  replyValidation,
  replyToReplyValidation,
  loginValidation,
  signUpValidation,
};
