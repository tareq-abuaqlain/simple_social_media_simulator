const replyRouter = require('express').Router();
const {
  addReplyController, getReplyController,
} = require('../controller');
const { checkSign } = require('../middleware');

replyRouter.get('/:commentId', getReplyController);
replyRouter.post('/:commentId', checkSign, addReplyController);

module.exports = replyRouter;
