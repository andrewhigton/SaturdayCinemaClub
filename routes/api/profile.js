const express = require ('express');
const router = express.Router()
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User'); 
const { check, validationResult } = require('express-validator');

// @route GET api/profile/me
// @desc get current users profile
// @access Private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id }).populate(
		'user',
		['name', 'avatar']
		); 
		
		if(!profile) {
			return res.status(400).json({ msg: 'No profile for this user' });
		}
		res.json(profile)
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error')
	}
	// res.send('Profile route');
});

// @route POST api/profile
// @desc create or update user profile
// @access Private
//the question at first, is this - how are you sending films to a film database?
router.post('/create-film', [
		auth, 
		[
		check('title', 'title is required').not().isEmpty(),
		check('cinema', 'cinema is required').not().isEmpty(),
		check('date', 'date is required').not().isEmpty(),
		check('image', 'image is required').not().isEmpty()

		]
	  ],
	  async (req, res) => {
	  	const errors = validationResult(req)
	  	if(!errors.isEmpty()) {
	  		return res.status(400).json({ errors: errors.array() });
	  	}

	  	const { 	
	  		// _id,	
	  		user,
	  		image,
	  		title,
	  		cinema,
	  		date,
	  		ticketPrice,
			crowdfundTarget,
			totalsoFar
		} = req.body;

	  	//build profile object 
	  	const profileFields = {};
	  	profileFields.user = req.user.id;
	  	if(title) profileFields.title = title;
	  	if(cinema) profileFields.cinema = cinema;
	  	if(image) profileFields.image = image;
	  	if(date) profileFields.date= date;
	  	if(ticketPrice) profileFields.ticketPrice = ticketPrice;
		if(crowdfundTarget) profileFields.crowdfundTarget= crowdfundTarget;
		if(totalsoFar) profileFields.totalsoFar= totalsoFar;

	  		try {
  	  			let profile = new Profile(profileFields);
	  			await profile.save()
	  			res.json(profile);
		  		} catch (err) {
		  			console.error(err.message);
		  			res.status(500).send('Server error');
		  		}
			}
		);

		router.put('/booking', [
		auth, 
	  ],
	  async (req, res) => {
	  	const errors = validationResult(req)
	  	if(!errors.isEmpty()) {
	  		return res.status(400).json({ errors: errors.array() });
	  	}
	  	console.log(req.data)
	  	const { 	
	  		_id,	
	  		user,
	  		image,
	  		title,
	  		cinema,
	  		date,
	  		ticketPrice,
			crowdfundTarget,
			totalsoFar,
	  	} = req.body;

	  	// so trying to work out how to get the _id of the user, and film
	  	// check structure in the morning

	  	//build profile object 
	  	const profileFields = {};
	  	// profileFields.film = req.user._id;
	  	profileFields.user = req.user.id;
	  	if(title) profileFields.title = title;
	  	if(cinema) profileFields.cinema = cinema;
	  	if(image) profileFields.image = image;
	  	if(date) profileFields.date= date;
	  	if(ticketPrice) profileFields.ticketPrice = ticketPrice;
		if(crowdfundTarget) profileFields.crowdfundTarget= crowdfundTarget;
		if(totalsoFar) profileFields.totalsoFar= totalsoFar;

	  		console.log(profileFields)
	  		try {
	  			// let profile = await Profile.findOne({ user: req._id });
	  			let profile = await Profile.findOne({ film: req.user._id });
	  			if(profile) {
	  				profile = await Profile.findOneAndUpdate(
	  					{ user: req.user.id },
	  					{ $set: profileFields },
	  					{ new: true }
	  					)
	  				return res.json(profile)
		  			}

		  		} catch (err) {
		  			console.error(err.message);
		  			res.status(500).send('Server error');
		  		}
			}
		);

		// @route GET api/profile
		// @desc GET all profiles
		// @access Public

		router.get('/', async (req, res) => {
			try {
				const profiles = await Profile.find().populate('user', 
				['name']);
				res.json(profiles)
			} catch (err) {
				console.error(err.message);
				res.status(500).send('Server Error');
			}
		});

		// @route GET api/profile/user/:user_id
		// @desc GET profile by user id
		// @access Public
	router.get('/user/:user_id', async (req, res) => {
		try {
			const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', 
			['name', 'avatar']);
			if(!profile) return res.status(400).json({ msg: 'no profile for this user'})
			res.json(profile)
		} catch (err) {
			console.error(err.message);
			if(err.kind === 'ObjectId') {
				return res.status(400).json({ msg: 'Profile not found'})
			}
			res.status(500).send('Server Error');
		}
	});
		// @route DELETE api/profile
		// @desc delete profile, user and post
		// @access Private

		router.delete('/', auth, async (req, res) => {
			try {
				await Post.deleteMany({ user: req.user.id })
				//remove profile
				await Profile.findOneAndRemove({ user: req.user.id})
				//remove user
				await User.findOneAndRemove({ _id: req.user.id})
				res.json({ msg: 'User deleted' });
			} catch (err) {
				console.error(err.message);
				res.status(500).send('Server Error');
			}
		});


module.exports = router;