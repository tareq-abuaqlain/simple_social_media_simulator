const { object, string, number } = require('yup');

const commentValidation = object().shape({
  comment_content: string().required(),
  user_id: number().required(),
  post_id: number().required(),

});

module.exports = commentValidation;
