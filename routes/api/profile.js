const express = require ('express');
const router = express.Router()
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User'); 
const { check, validationResult } = require('express-validator');

// @route GET api/profile for films and tickets
// @desc get current users profile
// @access Private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id }).populate(
		'user',
		['name']
		); 
		// console.log(req)		
		if(!profile) {
			return res.status(400).json({ msg: 'No profile for this user' });
		}
		res.json(profile)
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error')
	}
});

// router.post('/', 
// 	// [
// 	// 	auth, 
// 	//   ],
// 	  async (req, res) => {
// 	  	const errors = validationResult(req)
// 	  	if(!errors.isEmpty()) {
// 	  		return res.status(400).json({ errors: errors.array() });
// 	  	}

// 	  	const {
// 	  		user,
//     		name,
//     		tickets,
// 	  	} = req.body;

// 	  	//build profile object 
// 	  	const profileFields = {}
// 	  		profileFields.user = req.user.id;
// 	  		if(user) profileFields.user = user;
// 	  		if(name) profileFields.name = name;
//     		if(tickets) profileFields.tickets = tickets;
	  		

// 	  		try {
// 	  			let profile = await Profile.findOne({ user: req.user.id });
// 	  			if(profile) {
// 	  			profile = await Profile.findOneAndUpdate(
//   					{ user: req.user.id },
//   					{ $set: profileFields },
//   					{ new: true }
//   					)
//   				return res.json(profile)
// 	  			}

// 	  			//create
// 	  			profile = new Profile(profileFields);
// 		  		await profile.save()
// 	  			res.json(profile);

// 		  		} catch (err) {
// 		  			console.error(err.message);
// 		  			res.status(500).send('Server error');
// 		  		}
// 			}
// 		);

// @route POST api/profile
// @desc create or update user profile
// @access Private
router.put('/ticket', [
		auth, 
	  ],
	  async (req, res) => {
	  	const errors = validationResult(req)
	  	if(!errors.isEmpty()) {
	  		return res.status(400).json({ errors: errors.array() });
	  	}

	  	const {
	  		title,
    		ticketPrice,
    		numberOfTickets,
    		date,
    		cost,
    		cinema,
    		crowdfundTarget,
    		totalsoFar
	  	} = req.body;

	  	const newTicket = {
	  		title,
    		ticketPrice,
    		numberOfTickets,
    		date,
    		cost,
    		cinema,
    		crowdfundTarget,
    		totalsoFar
	  	}
	  		try {
	  			let profile = await Profile.findOne({ user: req.user.id });
	  			profile.tickets.unshift(newTicket);
 				await profile.save();
 				res.json(profile);
		  		} catch (err) {
		  			console.error(err.message);
		  			res.status(500).send('Not updated');
		  		}
			}
		);

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
				//create
		  			profile = new Film(profileFields);
		  			await profile.save()
		  			res.json(profile);
				  } catch (err) {
		  			console.error(err.message);
		  			res.status(500).send('Server error');
		  		}
			}
		);
		
		// @route DELETE api/profile
		// @desc delete profile, user and post
		// @access Private

router.delete('/{id}', auth, async (req, res) => {
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

router.delete('/tickets/:exp_id', auth, async (req, res) => {
			try {
				const profile = await Profile.findOne({ user: req.user.id });
				const removeIndex = profile.tickets
					.map(item => item.id)
					.indexOf(req.params.exp_id);
					profile.tickets.splice(removeIndex, 1);
					await profile.save();
					res.json(profile);
			} catch (err) {
				console.error(err.message);
		 		res.status(500).send('Nope');
			}
		})



module.exports = router;