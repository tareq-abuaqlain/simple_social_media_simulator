const postVersionsRouter = require('express').Router();

const { getPostVersionsController, postPostVersionsController } = require('../controller');

postVersionsRouter.get('/:postId', getPostVersionsController);
postVersionsRouter.post('/', postPostVersionsController);

module.exports = postVersionsRouter;
