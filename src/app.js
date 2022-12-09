require('dotenv').config();
const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./router');

const app = express();

app.use([
  cookieParser(),
  compression(),
  express.json(),
  express.static(join(__dirname, '..', 'public')),
  express.urlencoded({ extended: true }),
  router,
]);

app.set('port', process.env.PORT || 3000);

module.exports = app;
