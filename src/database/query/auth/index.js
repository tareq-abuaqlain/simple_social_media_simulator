const getUserByEmail = require('./getUserByEmail');
const getUserInfo = require('./getUserInfo');
const { insertNewUser, getLastId } = require('./insertNewUser');

module.exports = {
  getUserByEmail,
  getUserInfo,
  insertNewUser,
  getLastId,
};
