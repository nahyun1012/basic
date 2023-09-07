const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followingSchema = new Schema({
  // 팔로우 한 갯수
  user: { type: Schema.ObjectId, required: true },
  // 팔로우 받은 갯수
  following: { type: Schema.ObjectId, required: true }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

module.exports = mongoose.model('Following', followingSchema);