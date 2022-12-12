const { object, string, number } = require('yup');

const replyToReplyValidation = object().shape({
  reply_to_reply_content: string().required(),
  reply_id: number().required(),
  user_id: number().required(),

});

module.exports = replyToReplyValidation;
