const express = require('express');
const router = express.Router();
const usersRouter = require("./users");
const profilesRouter = require("./profiles");
const postRouter = require("./posts");
const auth =  require("../auth/auth");

router.get('/', function(req, res, next) {
  res.json({ message: "hello client" });
});

// 유저 라우터
router.use('/users', usersRouter);

// 프로필 라우터
router.use('/profiles', auth, profilesRouter);

// 포스트 라우터
router.use('/posts', auth, postRouter);

module.exports = router;