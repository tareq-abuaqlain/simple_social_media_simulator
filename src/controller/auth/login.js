const { getUserInfo } = require('../../database/query');
const { loginValidation } = require('../../validation');
const { comparePassword } = require('../../utils');
const { setCookie } = require('../../middleware');
require('dotenv').config();

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    await loginValidation.validate({ email, password });
    const data = await getUserInfo(email);
    if (data.length === 0) {
      res.status(400).json({ error: 'Invalid email or password' });
    } else {
      const { password: hashedPassword } = data[0];
      const isPasswordCorrect = await comparePassword(password, hashedPassword);
      if (isPasswordCorrect) {
        setCookie(req, res, { id: data[0].id, email }, 'Login successful');
      } else {
        res.status(400).json({ error: 'Invalid email or password' });
      }
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = login;
