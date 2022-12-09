const { object, string } = require('yup');

const userValidation = object().shape({
  username: string().required(),
  email: string().email().required(),
  password: string().required(),

});

module.exports = userValidation;
