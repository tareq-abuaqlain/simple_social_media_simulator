const { object, string, number } = require('yup');

const replyValidation = object().shape({
  reply_content: string().required(),
  user_id: number().required(),
  comment_id: number().required(),

});

module.exports = replyValidation;
