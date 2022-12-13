const {
  addPostQuery, getPostQuery, updatePostQuery, deletePostQuery, addSeenQuery,
} = require('./post');
const { getUserQuery } = require('./user');
const { addCommentQuery, getCommentQuery } = require('./comment');
const { addReplyQuery, getReplyQuery } = require('./reply');
const { addReplyToReplyQuery, getReplyToReplyQuery } = require('./replyToReply');
const { getPostVersionsQuery, postPostVersionsQuery } = require('./postVersions');
const { getUserInfo, insertNewUser, getUserByEmail } = require('./auth');

module.exports = {
  addPostQuery,
  getPostQuery,
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
  getPostVersionsQuery,
  postPostVersionsQuery,
  getUserInfo,
  insertNewUser,
  getUserByEmail,
};
