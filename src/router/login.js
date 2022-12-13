const loginRouter = require('express').Router();

const { login } = require('../controller');

loginRouter.post('/', login);

module.exports = loginRouter;
