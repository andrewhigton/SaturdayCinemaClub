const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  //do you need userID on this, to fetch it? 
  films: [
      {
        title: {
        type: String,
        required: true
      },
        location: {
        type: String,
        required: true
      },
        date: {
        type: Date,
        required: true
      }
      //   image: {
      //   type: String,
      //   required: true
      // },
      //   cinema: {
      //   type: String,
      //   required: true
      // },
      //   ticketPrice: {
      //   type: Number,
      //   required: true,
      // },
      //   crowdfundTarget: {
      //   type: Number,
      //   required: true,
      // },
      //   totalsoFar: {
      //   type: Number,
      //   required: true,
      //   }
      }
  ]
});

module.exports = User = mongoose.model('user', UserSchema);