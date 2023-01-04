const { hashPassword } = require('../../utils');
const { insertNewUser, getUserByEmail, getLastId } = require('../../database/query');
const { signUpValidation } = require('../../validation');
const { setCookie } = require('../../middleware');

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    await signUpValidation.validate({ username, email, password });
    const data = await getUserByEmail(email);
    if (data.length > 0) {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      const hashedPassword = await hashPassword(password);
      await insertNewUser(username, email, hashedPassword);
      const user = await getLastId();
      setCookie(req, res, { id: user[0].id, email }, 'Signup successful');
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = signup;
