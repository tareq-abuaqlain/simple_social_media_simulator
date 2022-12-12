const { object, string, number } = require('yup');

const postValidation = object().shape({
  post_content: string().required(),
  user_id: number().required(),

});

module.exports = postValidation;
