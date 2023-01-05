const { object, string } = require('yup');

const commentValidation = object().shape({
  comment_content: string().required(),

});

module.exports = commentValidation;
