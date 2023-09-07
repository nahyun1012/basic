const User = require('../models/User');
const Following = require('../models/Following');

// 프로필 목록
exports.find = async (req, res, next) => {
  try {
    // 검색 조건
    const where = {};

    // 특정유저가 팔로우하는 프로필 목록
    if ('following' in req.query) {
      // 쿼리에 담긴 정보로 유저를 검색한다
      const user = await User
        .findOne({ username: req.query.following });

      // 유저가 존재하지 않을 경우
      if (!user) {
        const err = new Error("User is not found");
        err.status = 404;
        throw err;
      }

      // 팔로잉 컬렉션 검색
      const followingUsers = await Following
        .find({ user: user._id })

      // 도큐먼트에서 following필드만 추출한 데이터
      const followingIds = followingUsers
        .map(followingUser => followingUser.following);

      // 검색 조건을 추가한다
      where._id = followingIds;
    }

    // 특정 유저의 팔로워 리스트
    if ('followers' in req.query) {
      // 쿼리에 저장된 값으로 유저를 검색한다
      const user = await User
        .findOne({ username: req.query.followers });

      // 유저가 존재하지 않는 경우 404에러 처리
      if (!user) {
        const err = new Error("User is not found");
        err.status = 404;
        throw err;
      }

      //팔로잉 컬렉션을 검색한다
      const followers = await Following
        .find({ following: user._id });

      const followerIds = followers.map(follower => follower.user);

      // 검색 조건을 추가한다
      where._id = followerIds;
    }

    // 특정 문자를 포함한 프로필 리스트
    if ('username' in req.query) {
      // 정규식을 사용한다
      const patt = new RegExp(req.query.username, 'i');

      where.username = patt;
    }

    // 프로필 필드
    const profileFields = 'username name avatar avatarUrl bio';

    // 검색 실행
    const profiles = await User // Model.find(검색조건, 필드)
      .find(where, profileFields)
      .populate({ // 컬렉션 조인 실행
        path: 'isFollowing',
        match: { user: req.user._id }
      })

    // 프로필 갯수를 구한다
    const profileCount = await User.count(where);

    res.json({ profiles, profileCount });

  } catch (error) {
    next(error)
  }
};

// 프로필 상세보기
exports.findOne = async (req, res, next) => {
  try {
    // 프로필 필드
    const profileFields = 'username name avatar avatarUrl bio';

    // 프로필 검색
    const profile = await User
      .findOne({ username: req.params.username }, profileFields)
      .populate('postCount') // 컬렉션 조인 실행
      .populate('followerCount')
      .populate('followingCount')
      .populate({
        path: 'isFollowing',
        match: { user: req.user._id }
      })

    // 프로필에 존재하지 않는 경우
    if (!profile) {
      const err = new Error("Profile is not found");
      err.status = 404;
      throw err;
    }

    res.json({ profile });

  } catch (error) {
    next(error)
  }
};

// 팔로우
exports.follow = async (req, res, next) => {
  try {
    // 프로필 필드
    const profileFields = 'username name avatar avatarUrl bio';

    // 파라미터로 전달된 유저이름으로 유저를 검색한다
    const profile = await User
      .findOne({ username: req.params.username }, profileFields)

    // 유저가 존재하지 않을 경우
    if (!profile) {
      const err = new Error('Profile is not found')
      err.status = 404;
      throw err;
    }

    // req.user: 로그인 위치
    // req.params.username: 로그인유저가 팔로우를 요청한 유저
    if (req.user.username === req.params.username) {
      // 본인을 팔로우하는 경우
      const err = new Error('Cannot follow yourself')
      err.status = 400;
      throw err;
    }

    // 이미 팔로우 상태인지 확인한다
    const isFollowing = await Following
      .findOne({ user: req.user._id, following: profile._id });

    // 팔로우 상태가 아닌 경우
    if (!isFollowing) {
      const following = new Following({
        user: req.user._id,
        following: profile._id
      })

      await following.save();
    }

    // 서버의 응답
    res.json({ profile });

  } catch (error) {
    next(error)
  }
};

// 팔로우 취소
exports.unfollow = async (req, res, next) => {
  try {
    const profileFields = 'username name avatar avatarUrl bio';

    // 팔로우를 취소할 프로필을 검색한다
    const profile = await User
      .findOne({ username: req.params.username }, profileFields)

    // 프로필이 존재하지 않은 경우
    if (!profile) {
      const err = new Error('Profile is  not found')
      err.status = 404;
      throw err;
    }

    // 현재 프로필 유저를 팔로우 중인지 확인
    const isFollowing = await Following
      .findOne({ user: req.user._id, following: profile._id });

    // 팔로우 중이 맞다면 팔로우를 취소한다
    if (isFollowing) {
      // deleteOne: 현재의 도큐먼트를 삭제한다
      await isFollowing.deleteOne();
    }

    res.json({ profile });

  } catch (error) {
    next(error)
  }
};