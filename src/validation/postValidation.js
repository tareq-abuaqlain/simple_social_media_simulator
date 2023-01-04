const { object, string } = require('yup');

const postValidation = object().shape({
  post_content: string().required(),

});

module.exports = postValidation;
