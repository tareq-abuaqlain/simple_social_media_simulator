const postRouter = require('express').Router();
const {
  addPostController, getPostController, updatePostController, deletePostController, addSeenController,
} = require('../controller');

postRouter.get('/', getPostController);
postRouter.post('/', addPostController);
postRouter.put('/seen/:id', addSeenController);
postRouter.put('/:id', updatePostController);
postRouter.delete('/:id', deletePostController);

module.exports = postRouter;
