const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// get total count of thoughts
userSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.reduce((total, thoughts) => total + thoughts.reactions.length + 1, 0);
});

const User = model('User', userSchema);

module.exports = User;