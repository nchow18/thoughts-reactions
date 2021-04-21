const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const FriendSchema = new Schema(
  {
    friendName: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    id: false
  }
);

const Friend = model('Friend', FriendSchema);

module.exports = Friend;