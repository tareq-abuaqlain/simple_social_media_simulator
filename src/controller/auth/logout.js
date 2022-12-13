const logout = (req, res) => {
  res.clearCookie('token', { path: '/' });
  res.json({ message: 'Logout successful' });
};

module.exports = logout;
