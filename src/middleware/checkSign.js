require('dotenv').config();

const { verifyToken } = require('../utils');

const checkSign = async (req, res, next) => {
  try {
    const { env: { SECRET_KEY } } = process;
    const { cookies: { token } } = req;
    if (!token) {
      res.status(401).json({ message: 'Unauthorized' });
    } else {
      const { id } = await verifyToken(token, SECRET_KEY);
      req.userId = id;
      next();
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = checkSign;
