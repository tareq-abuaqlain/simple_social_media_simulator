const logoutRouter = require('express').Router();

const { logout } = require('../controller');

logoutRouter.post('/', logout);

module.exports = logoutRouter;
