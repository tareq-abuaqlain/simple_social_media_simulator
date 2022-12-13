require('dotenv').config();
const { signToken } = require('../utils');

const setCookie = async (req, res) => {
  try {
    const { env: { SECRET_KEY } } = process;
    const { id } = req;
    const token = await signToken({ id }, SECRET_KEY);
    res.cookie('token', token, {
      maxAge: 300000000,
      httpOnly: true,
      sameSite: true,
    }).status(200).json({ message: 'User successfully signed up' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = setCookie;
