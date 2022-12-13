const {
  addPostController, getPostController, updatePostController, deletePostController, addSeenController,
} = require('./postController');
const { getUserController } = require('./userController');
const { addCommentController, getCommentController } = require('./commentController');
const { addReplyController, getReplyController } = require('./replyController');
const { addReplyToReplyController, getReplyToReplyController } = require('./replyToReply');
const { getPostVersionsController, postPostVersionsController } = require('./postVersions');
const { login, signUp, logout } = require('./auth');

module.exports = {
  addPostController,
  getPostController,
  updatePostController,
  getUserController,
  deletePostController,
  addCommentController,
  getCommentController,
  addSeenController,
  addReplyController,
  getReplyController,
  addReplyToReplyController,
  getReplyToReplyController,
  getPostVersionsController,
  postPostVersionsController,
  login,
  signUp,
  logout,
};
