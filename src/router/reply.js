const replyRouter = require('express').Router();
const {
  addReplyController, getReplyController,
} = require('../controller');

replyRouter.get('/:commentId', getReplyController);
replyRouter.post('/', addReplyController);

module.exports = replyRouter;
