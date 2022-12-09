const postRouter = require('express').Router();
const { addPostController, getPostController, updatePostController } = require('../controller');

postRouter.get('/', getPostController);
postRouter.post('/', addPostController);
postRouter.put('/:id', updatePostController);

module.exports = postRouter;
