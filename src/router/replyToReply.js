const replyToReplyRouter = require('express').Router();
const {
  addReplyToReplyController, getReplyToReplyController,
} = require('../controller');
const { checkSign } = require('../middleware');

replyToReplyRouter.get('/:replyId', getReplyToReplyController);
replyToReplyRouter.post('/:replyId', checkSign, addReplyToReplyController);

module.exports = replyToReplyRouter;
