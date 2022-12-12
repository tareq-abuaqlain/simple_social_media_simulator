const commentRouter = require('express').Router();

const {
  addCommentController, getCommentController,
} = require('../controller');

commentRouter.get('/:postId', getCommentController);
commentRouter.post('/', addCommentController);

module.exports = commentRouter;
