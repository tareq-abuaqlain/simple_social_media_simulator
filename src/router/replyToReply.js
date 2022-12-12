const replyToReplyRouter = require('express').Router();
const {
  addReplyToReplyController, getReplyToReplyController,
} = require('../controller');

replyToReplyRouter.get('/:replyId', getReplyToReplyController);
replyToReplyRouter.post('/', addReplyToReplyController);

module.exports = replyToReplyRouter;
