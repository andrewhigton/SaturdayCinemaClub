const express = require ('express');
const router = express.Router()
const auth = require('../../middleware/auth');
const Film = require('../../models/Film');
// const config = require('config');
const { check, validationResult } = require('express-validator');

//here you need
// 1 get one films
// 2 get all films
// 3 update film (for tickets)
 
// @route GET api/film
		// @desc GET all films
		// @access Public	
		router.get('/', async (req, res) => {
			try {
				const films = await Film.find().populate('film', 
				['title', 'cinema']);
				res.json(films)
			} catch (err) {
				console.error(err.message);
				res.status(500).send('Server Error');
			}
		});

		// @route GET api/film/current
		// @desc get current users profile
		// @access Private
		//this did't work
		//trying to get state.film to load, why not?  
		
		//try this again
		// router.get('/current/', auth, async (req, res) => {
		//   try {
		//     const profile = await Film.findOne({
		//       title: req.body.title
		//     }).populate('film', ['title', 'cinema']);

		//     if (!profile) {
		//       return res.status(400).json({ msg: 'There is no profile for this user' });
		//     }

		//     res.json(profile);
		//   } catch (err) {
		//     console.error(err.message);
		//     res.status(500).send('Server Error');
		//   }
		// });



		// router.get('/:id', async (req, res) => {
		// 	try {
		// 		const films = await Film.findOne({ film: req.params.id} ).populate('films', 
		// 		['title', 'cinema']);
		// 		res.json(films)
		// 	} catch (err) {
		// 		console.error(err.message);
		// 		res.status(500).send('Server Error');
		// 	}
		// });



// @route POST api/film
// @desc Create or update film
// @access Private
router.post('/', [
    check('title', 'Title is required')
      .not()
      .isEmpty(),
    check('date', 'Please include a valid date')
      .not()
      .isEmpty(),
    check('cinema', 'Please include a valid cinema')
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
	    const errors = validationResult(req);
	    if (!errors.isEmpty()) {
      	return res.status(400).json({ errors: errors.array() });
    	}

    const { 
    	user_id,
    	title, 
    	date, 
    	cinema,
    	image, 
    	ticketPrice, 
    	crowdfundTarget, 
    	totalsoFar 
    	} = req.body;

    const filmFields = {};
	  	if(user_id) filmFields.user_id = user_id;
	  	if(title) filmFields.title = title;
	  	if(date) filmFields.date = date;
	  	if(cinema) filmFields.cinema = cinema;
	  	if(ticketPrice) filmFields.ticketPrice= ticketPrice;
	  	if(crowdfundTarget) filmFields.crowdfundTarget= crowdfundTarget;
	  	if(totalsoFar) filmFields.totalsoFar = totalsoFar;
	  	
    try {
      film = new Film({
        user_id,
        title, 
    	date, 
    	cinema,
    	image,
    	ticketPrice, 
    	crowdfundTarget, 
    	totalsoFar 
      });

      await film.save();

      const payload = {
        film: {
          id: film.id
        }
      }

      // jwt.sign(
      // 	payload, 
      // 	config.get('jwtSecret'),
      // 	(err, token) => {
      // 		if(err) throw err;
      		res.json({ film })
      	// });

      // res.send('User registered');	
		} catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);



		// @route GET api/film/:film_id
		// @desc GET film by film id
		// @access Public

		router.put('/booking', async (req, res) => {
	  	const errors = validationResult(req)
	  	if(!errors.isEmpty()) {
	  		return res.status(400).json({ errors: errors.array() });
	  	}
	  	
	  	const { 	
	  		_id,
	  		// user,
	  		title,
	  		image,
	  		cinema,
	  		date,
	  		ticketPrice,
			crowdfundTarget,
			totalsoFar
	  	} = req.body;

	  	//build profile object 
	  	const filmFields = {};
	  	if(_id) filmFields._id = _id;
	  	// if(user) filmFields.user = user;
	  	if(title) filmFields.title = title;
	  	if(cinema) filmFields.cinema = cinema;
	  	if(image) filmFields.image = image;
	  	if(date) filmFields.date= date;
	  	if(ticketPrice) filmFields.ticketPrice = ticketPrice;
		if(crowdfundTarget) filmFields.crowdfundTarget= crowdfundTarget;
		if(totalsoFar) filmFields.totalsoFar= totalsoFar;
	  		// console.log(filmFields)	
	  		try {
	  			//const updatedFilm = await Film.findOne({ films: req._id });
	  			let updatedFilm = await Film.findOne({ _id: req.body._id });
					//console.log(res.json(updatedFilm))
	  				updatedFilm = await Film.findOneAndUpdate(
	  					{ _id: req.body._id },
	  					{ $set: filmFields },
	  					{ new: true }
	  					)
	  				return res.json(updatedFilm)
		  		} catch (err) {
		  			console.error(err.message);
		  			res.status(500).send('Server error');
		  		}
			}
		);
	
		// router.get('/:film_id', async (req, res) => {
	 //  	const errors = validationResult(req)
	 //  	if(!errors.isEmpty()) {
	 //  		return res.status(400).json({ errors: errors.array() });
	 //  	}
	  	
	 //  	const { 	
	 //  		_id,
	 //  		user,
	 //  		title,
	 //  		image,
	 //  		cinema,
	 //  		date,
	 //  		ticketPrice,
		// 	crowdfundTarget,
		// 	totalsoFar
	 //  	} = req.body;

	 //  	//build profile object 
	 //  	const filmFields = {};
	 //  	if(_id) filmFields._id = _id;
	 //  	if(user) filmFields.user = user;
	 //  	if(title) filmFields.title = title;
	 //  	if(cinema) filmFields.cinema = cinema;
	 //  	if(image) filmFields.image = image;
	 //  	if(date) filmFields.date= date;
	 //  	if(ticketPrice) filmFields.ticketPrice = ticketPrice;
		// if(crowdfundTarget) filmFields.crowdfundTarget= crowdfundTarget;
		// if(totalsoFar) filmFields.totalsoFar= totalsoFar;
	 //  		// console.log(filmFields)	
	 //  		try {
	 //  			//const updatedFilm = await Film.findOne({ films: req._id });
	 //  			let findFilm = await Film.findOne({ _id: req.params.film_id });
		// 			//console.log(res.json(updatedFilm))
	 //  				// updatedFilm = await Film.findOneAndUpdate(
	 //  				// 	{ _id: req.params.film_id },
	 //  				// 	{ $set: filmFields },
	 //  				// 	{ new: true }
	 //  				// 	)
	 //  				return res.json(findFilm)
		//   		} catch (err) {
		//   			console.error(err.message);
		//   			res.status(500).send('Server error');
		//   		}
		// 	}
		// );

	router.get('/:id', async (req, res) => {
		try {
		const film = await Film.findOne({ _id: req.params.id })
		// .populate('film', 
		// 	['title', 'cinema']);
		if(!film) return res.status(400).json({ msg: 'no film for this search'})
			return res.json(film)
		} catch (err) {
			console.error(err.message);
			if(err.kind === 'ObjectId') {
				return res.status(400).json({ msg: 'Film not found'})
			}
			res.status(500).send('Server Error');
		}
	});

		// @route DELETE api/film
		// @desc	 delete profile, user and post
		// @access Private

		//need user id for this, why? where is it required? 
		//it works though. just log in
		//problem is, anyone logged in can delete!
		//how to restrict it to one master user? 
		router.delete('/:film_id', auth, async (req, res) => {
			try {
				await Film.findOneAndRemove(req.params.film_id)
				//remove user
				// await User.findOneAndRemove({ _id: req.user.id})
				res.json({ msg: 'User deleted' });
			} catch (err) {
				console.error(err.message);
				res.status(500).send('Server Error');
			}
		});

module.exports = router;



	// @route PUT api/film/edit
	// @desc Edit film
	// @access Public


	// router.put('/', async (req, res) => {
	    
 //    const { 
 //    	title, 
 //    	date, 
 //    	cinema, 
 //    	ticketPrice, 
 //    	crowdfundTarget, 
 //    	totalsoFar 
 //    	} = req.body;

 //    try {
 //      let film = await Film.findOne( { title } );

 //      if (film) {
 //      	// const  filter = { title: "Bladerunner"};
	//      //return res.json(film)
	//     //console.log(film)
	//     const filter = { film };
	//     const update = {cinema: "Picturehouse"};
	// 	//console.log(filter)
	// 	//console.log(update)
 //      	film = await Film.findOneAndUpdate( filter, update,
 //      		// console.log(film.title)
 //      		//console.log(req.body._id)
 //      		// { film: req.film.id },
 //      		// {$set: {'film.title': 'title'}},
 //      		{ new: true }
 //      		);
 //      	//await film.save();
 //      	return res.json(film)
 //      	}      	
      	// }

     
      // const payload = {
      //   film: {
      //     id: film.id
	     //    }
	     //  }
      // 		res.json({ film })
// 		} catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server error');
//     }
//   }
// );

		