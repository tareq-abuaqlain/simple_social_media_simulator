const userRouter = require('express').Router();
const { addUserController, getUserController } = require('../controller');

userRouter.get('/', getUserController);
userRouter.post('/', addUserController);
module.exports = userRouter;
