const { object, string } = require('yup');

const signUpValidation = object().shape({
  username: string().required(),
  email: string().email().required(),
  password: string().required().min(6),

});

module.exports = signUpValidation;
