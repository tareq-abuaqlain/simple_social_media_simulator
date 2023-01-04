const logoutRouter = require('express').Router();

const { logout } = require('../controller');

logoutRouter.get('/', logout);

module.exports = logoutRouter;
