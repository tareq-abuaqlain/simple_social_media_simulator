const commentRouter = require('express').Router();

const {
  addCommentController, getCommentController,
} = require('../controller');
const { checkSign } = require('../middleware');

commentRouter.get('/:postId', checkSign, getCommentController);
commentRouter.post('/:postId', checkSign, addCommentController);

module.exports = commentRouter;
