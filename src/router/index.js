const { Router } = require('express');

const postRouter = require('./post');
const userRouter = require('./user');
const commentRouter = require('./comment');
const replyRouter = require('./reply');
const replyToReplyRouter = require('./replyToReply');
const postVersionsRouter = require('./postVersions');

const router = Router();

router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/comment', commentRouter);
router.use('/reply', replyRouter);
router.use('/replyToReply', replyToReplyRouter);
router.use('/postVersions', postVersionsRouter);

module.exports = router;
