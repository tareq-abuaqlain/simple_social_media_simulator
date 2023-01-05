const { object, string } = require('yup');

const replyToReplyValidation = object().shape({
  reply_to_reply_content: string().required(),

});

module.exports = replyToReplyValidation;
