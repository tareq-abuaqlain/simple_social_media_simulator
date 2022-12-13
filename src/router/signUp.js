const signUpRouter = require('express').Router();

const { signUp } = require('../controller');
// const setCookie = require('../middleware');

signUpRouter.post('/', signUp);

module.exports = signUpRouter;
