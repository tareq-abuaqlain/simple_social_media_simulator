const { object, string } = require('yup');

const loginValidation = object().shape({
  email: string().email().required(),
  password: string().required(),
});

module.exports = loginValidation;
