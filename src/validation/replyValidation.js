const { object, string } = require('yup');

const replyValidation = object().shape({
  reply_content: string().required(),

});

module.exports = replyValidation;
