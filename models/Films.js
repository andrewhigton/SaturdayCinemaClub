const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
	user_id: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	cinema: {
		type: String,
		required: true
	},
	ticketPrice: {
		type: Number,
		required: true,
	},
	crowdfundTarget: {
		type: Number,
		required: true,
	},
	totalsoFar: {
		type: Number,
		required: true,
	}
});

module.exports = Films = mongoose.model('film', FilmSchema);