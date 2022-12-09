/* eslint-disable consistent-return */
const { addUserQuery } = require('../../database/query');
const { userValidation } = require('../../validation');
const { CustomError } = require('../../helpers');

const addUserController = async (req, res, next) => {
  try {
    const { username, email, password } = await userValidation.validate(req.body, { abortEarly: false });
    await addUserQuery(username, email, password);
    res.json({ message: 'User added successfully' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      // return next(new CustomError(400, error.errors));
      return next(new CustomError(400, error.errors));
    }
    res.status(500).json({ error: 'Internal Server Error' });
    return next(error);
  }
};

module.exports = addUserController;
