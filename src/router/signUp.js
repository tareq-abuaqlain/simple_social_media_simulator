const signUpRouter = require('express').Router();

const { signUp } = require('../controller');

signUpRouter.post('/', signUp);

module.exports = signUpRouter;
