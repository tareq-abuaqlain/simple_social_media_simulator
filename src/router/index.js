const { Router } = require('express');

const postRouter = require('./post');
const userRouter = require('./user');

const router = Router();

router.use('/user', userRouter);
router.use('/post', postRouter);

// eslint-disable-next-line no-unused-vars
router.use((req, res, next) => res.status(404).json({ error: 'Not Found' }));

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(err.status || 500).json(err.message);
});

module.exports = router;
