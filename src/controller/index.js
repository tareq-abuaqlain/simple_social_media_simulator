const {
  addPostController, getPostController, updatePostController, deletePostController, addSeenController,
} = require('./postController');
const { getUserController, addUserController } = require('./userController');
const { addCommentController, getCommentController } = require('./commentController');
const { addReplyController, getReplyController } = require('./replyController');
const { addReplyToReplyController, getReplyToReplyController } = require('./replyToReply');

module.exports = {
  addPostController,
  getPostController,
  updatePostController,
  getUserController,
  addUserController,
  deletePostController,
  addCommentController,
  getCommentController,
  addSeenController,
  addReplyController,
  getReplyController,
  addReplyToReplyController,
  getReplyToReplyController,
};
