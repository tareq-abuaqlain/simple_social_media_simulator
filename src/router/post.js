const postRouter = require('express').Router();
const {
  addPostController, getPostController, updatePostController, deletePostController, addSeenController,
} = require('../controller');
const { checkSign } = require('../middleware');

postRouter.get('/', getPostController);
postRouter.post('/', checkSign, addPostController);
postRouter.put('/seen/:id', checkSign, addSeenController);
postRouter.put('/:id', checkSign, updatePostController);
postRouter.delete('/:id', checkSign, deletePostController);

module.exports = postRouter;
