// todo 
//at the moent - trying to get the screen to update with new model
// 1 enter number of tickets, calculate price,  go to booking payment DONE
// 2 send new object to createFilm - now can't update, creates new film. 
	//if you update profile, you overwrite the current film
	//if you update with fn removed, you create new version of same film
	// what's the answer.
	// separate the creation and update functions DONE
	//need to separete the films and users, akin to exp in devconnectors, and update separately 
	//but first, can you update via overwriting the _id first before major reconconstruction?
// 3 create tickets, return to dashboard with tickets on dashboard
// 4 with two sections, one for films, one for tickets 
// 5 why is bookpage called twice?
// 6 why can i not navigate between the pages without losing the data?

import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateFilm, getCurrentProfile } from '../../actions/profile';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

const CheckoutPage = ({
	updateFilm,
	getCurrentProfile,
	profile: { profile, loading },
	history, 
	id,
}) => {
	const [formData, setFormData] = useState({
		_id: '',
		user: '',
		title: '',
		date: '',
		cinema: '',
		image: '',
		ticketPrice: '',
		crowdfundTarget: '',
		totalsoFar: ''
	});
	// console.log(props)

	const [bookingTotal, setBookingTotal] = useState(0);

	useEffect(() => {
		getCurrentProfile();
		//this fills the values with current values
	setFormData({
      _id: !profile._id ? '' : profile._id,
      user: !profile.user ? '' : profile.user,
      title: !profile.title ? '' : profile.title,
      cinema: !profile.cinema ? '' : profile.cinema,
      date: !profile.date ? '' : profile.date,
      image: !profile.image ? '' : profile.image,
      ticketPrice: !profile.ticketPrice ? '' : profile.ticketPrice,
      crowdfundTarget: !profile.crowdfundTarget ? '' : profile.crowdfundTarget,
      totalsoFar: !profile.totalsoFar ? '' : profile.totalsoFar
    });

  }, [loading, getCurrentProfile]);
	//console.log(profile)
	// console.log(formData)
	let {
		_id,
		user,
		title,
		date,
		cinema,
		image,
		ticketPrice,
		crowdfundTarget,
		totalsoFar
	} = formData;

	let tickets = 0;
			
	const onChange = e => {
		// setFormData({ ...formData, [e.target.name]: e.target.value });
		tickets = profile.totalsoFar + parseInt(e.target.value)
		setBookingTotal(parseInt(profile.ticketPrice) * parseInt(e.target.value));
		setFormData({ ...formData, totalsoFar: tickets });
		// console.log(bookingTotal)
	}	
		
	const onSubmit = (e) => {
		e.preventDefault();
		//so here, you send through same ID every time, no matter which film.
		//fix this first? 
		// console.log(formData._id)
		updateFilm(formData, history);
	};

	return (
	<div>
	<form>
	<div className='checkout-page how-it-works'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Film: {profile.title}</span>
			</div>
			
			<div className='header-block'>
				<span>Date: {profile.date} </span>
			</div>
			
			<div className='header-block'>
				<span>Price: £{profile.ticketPrice} </span>
			</div>
			
			<div className='header-block'>
				<span>Crowdfunding Target: {profile.crowdfundTarget} </span>
			</div>
			<div 
			className='header-block'>
				<span>Tickets sold: {profile.totalsoFar}</span>
			</div>
		</div>
		</div>
		</form>
			<div className='header-block'>
				<input
					type='number'
					placeholder='Enter number of tickets'
					name='tickets'
					onChange={e => onChange(e)}
				/>
			</div>
			<div className='header-block'>
				<span>Basket total: £{bookingTotal}</span>
			</div>
			<div>
			<Link className='btn btn-light my-1' to='/dashboard'>Go Back
			</Link>
			</div>
			<div>
				<span onClick={e => onSubmit(e)}>
					<StripeCheckoutButton />
				</span>
			</div>
		</div>
	);
};

CheckoutPage.propTypes = {
	updateFilm: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile
});

export default connect(mapStateToProps, { updateFilm, getCurrentProfile })(
	withRouter(CheckoutPage)
);