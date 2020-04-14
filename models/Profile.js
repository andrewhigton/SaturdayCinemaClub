const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
	name: {
		type: String,
		required: true
	}, 
	tickets: [
				{		
			  	title: {
					type: String,
					required: true
				},
				cinema: {
					type: String,
					required: false
				},
				ticketPrice: {
					type: Number,
					required: false
				},
				numberOfTickets: {
					type: Number,
					required: true
				},
				date: {
					type:  Date,
					required: true
				},
				// time: {
				// 	type:  Date,
				// 	required: true
				// },
				cost: {
					type: Number,
					required: true
				},
				crowdfundTarget: {
					type: Number,
					required: false,
				},
				totalsoFar: {
					type: Number,
					required: false,
					  }
					}
				]
	// 		films: [
	// 	{
	// 	  title: {
	// 			type: String,
	// 			required: true
	// 		},
	// 		image: {
	// 			type: String,
	// 			required: true
	// 		},
	// 		cinema: {
	// 			type: String,
	// 			required: true
	// 		},
	// 		date: {
	// 			type: Date,
	// 			required: true
	// 		},
	// 		ticketPrice: {
	// 			type: Number,
	// 			required: false
	// 		},
	// 		crowdfundTarget: {
	// 			type: Number,
	// 			required: false,
	// 		},
	// 		totalsoFar: {
	// 			type: Number,
	// 			required: false,
	// 			  }
	// 			}
	// ],	

			});

module.exports = Profile = mongoose.model('profile', ProfileSchema);