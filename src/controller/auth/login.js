const { getUserInfo } = require('../../database/query');
const { loginValidation } = require('../../validation');
const { comparePassword } = require('../../utils');

const login = async (req, res, next) => {
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
        res.json({ message: 'Login successful' });
      } else {
        res.status(400).json({ error: 'Invalid email or password' });
      }
    }
    // req.id = data[0].id;
    next();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = login;
