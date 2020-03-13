const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
    title: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	cinema: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	ticketPrice: {
		type: Number,
		required: false
	},
	crowdfundTarget: {
		type: Number,
		required: false,
	},
	totalsoFar: {
		type: Number,
		required: false,
	  }
});

module.exports = Films = mongoose.model('film', ProfileSchema);


// films: [
//    	{ 
//     title: {
// 		type: String,
// 		required: true
// 	},
// 	date: {
// 		type: Date,
// 		required: true
// 	},
// 	cinema: {
// 		type: String,
// 		required: true
// 	},
// 	image: {
// 		type: String,
// 		required: true
// 	},
// 	ticketPrice: {
// 		type: Number,
// 		required: false
// 	},
// 	crowdfundTarget: {
// 		type: Number,
// 		required: false,
// 	},
// 	totalsoFar: {
// 		type: Number,
// 		required: false,
// 	  }
// 	}
//   ],
//   tickets: [
//    	{ 
//     title: {
// 		type: String,
// 		required: true
// 	},
// 	date: {
// 		type: Date,
// 		required: true
// 	},
// 	cinema: {
// 		type: String,
// 		required: true
// 	},
// 	ticketPrice: {
// 		type: Number,
// 		required: false
// 		},
// 	}
//   ]	