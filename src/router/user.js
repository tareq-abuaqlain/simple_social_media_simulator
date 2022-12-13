const userRouter = require('express').Router();
const { getUserController } = require('../controller');

userRouter.get('/', getUserController);
module.exports = userRouter;
