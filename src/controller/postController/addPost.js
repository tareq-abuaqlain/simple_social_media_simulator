const { addPostQuery, getPostQuery, postPostVersionsQuery } = require('../../database/query');
const { postValidation } = require('../../validation');
const { CustomError } = require('../../helpers');

const date_created = new Date().toLocaleDateString();

const addPostController = async (req, res, next) => {
  try {
    const { post_content, user_id } = await postValidation.validate(req.body, { abortEarly: false });
    const data = await getPostQuery();
    if (data.filter((item0) => item0.user_id === user_id).map((item) => item.date_created).filter((item2) => item2 === date_created).length > 4) {
      return res.json({ message: 'You cannot add more than 5 posts per day' });
    }
    await addPostQuery(post_content, user_id);
    await postPostVersionsQuery();
    return res.json({ message: 'Post added successfully' });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(new CustomError(400, error.errors));
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = addPostController;
