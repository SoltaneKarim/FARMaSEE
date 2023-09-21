const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  specificId: {
    type: Number,
    // required: true
  },
  fullname: {
    type: String,
    // required: true
  },
  messages: [
    {
      text: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now
      },
      usercontacted: {
        type: Number,
      }
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;