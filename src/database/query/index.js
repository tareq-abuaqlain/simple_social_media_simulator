const {
  addPostQuery, getPostQuery, updatePostQuery, deletePostQuery, addSeenQuery,
} = require('./post');
const { addUserQuery, getUserQuery } = require('./user');
const { addCommentQuery, getCommentQuery } = require('./comment');
const { addReplyQuery, getReplyQuery } = require('./reply');
const { addReplyToReplyQuery, getReplyToReplyQuery } = require('./replyToReply');

module.exports = {
  addPostQuery,
  getPostQuery,
  addUserQuery,
  getUserQuery,
  updatePostQuery,
  deletePostQuery,
  addCommentQuery,
  getCommentQuery,
  addSeenQuery,
  addReplyQuery,
  getReplyQuery,
  addReplyToReplyQuery,
  getReplyToReplyQuery,
};
