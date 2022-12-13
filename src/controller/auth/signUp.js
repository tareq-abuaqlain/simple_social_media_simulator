const { hashPassword } = require('../../utils');
const { insertNewUser, getUserByEmail } = require('../../database/query');
const { signUpValidation } = require('../../validation');

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    await signUpValidation.validate({ username, email, password });
    const data = await getUserByEmail(email);
    if (data.length > 0) {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      const hashedPassword = await hashPassword(password);
      await insertNewUser(username, email, hashedPassword);
      res.json({ message: 'Signup successful' });
    }
    next();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = signup;
