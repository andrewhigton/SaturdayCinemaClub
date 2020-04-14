//toto
// book through landing page, go to a page that tells user your ticket will be sent when film confirmed
// how to trigger rerender after booking?

// once they book, take user to their dashboard, with tickets and any films created  
// can only do this with stripe payouts on server 
// so keep profile separate. use main landing for films. plus your films and tickets link  
// next: how to create a profile? 

// 5 how do you create one auto? do you create a profile separately? tom doesn't have one.jim does
// 6 fix css, make flexy for mobile
// 7 api call on film page? imdb, wiki?  
// 8 reload dashboard, films not yet loaded - log user out?
// 9 need to add stripe checkout details   

import React, { useEffect, useState, Fragment } from 'react';
import { useParams} from 'react-router';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getFilmById, updateFilm } from '../../actions/film';
import CheckoutFilm from '../checkout-film/Checkout-Film'
// import { getCurrentProfile, getFilmById } from '../../actions/profile';
// import { updateFilm } from '../../actions/profile';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
//import queryString from 'query-string';

const FilmPage = ({
	updateFilm,
	getFilmById,
	film: {film, loading},
	match,
	// profile: { profile, loading },
	history
}) => {
	useEffect(() => {
		getFilmById(match.params._id);
  	}, [loading, getFilmById]);

//this creates the state
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
	
// 	//set's the values of the state
	useEffect(() => {	
      	getFilmById(match.params.id);	

	if(!loading && film) {   
		setFormData({
	      _id: film._id,
	      user: film.user,
	      title: film.title,
	      cinema: film.cinema,
	      date: film.date,
	      image: film.image,
	      ticketPrice: film.ticketPrice,
	      crowdfundTarget: film.crowdfundTarget,
	      totalsoFar: film.totalsoFar
	    		});
			 }
	   }, [loading, getFilmById]);

	const {
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

	//the pattern is this.
	// 1 initiate consts with above		
	// 2 onchange calls setformdata with values attached
	// 3 when is setformdata called, interms of being wrapped in useEffect(fetches current film)?
	// 4 setFormData sets initial state to values.  
	// 5 so state values are either '', or the value attached to film. which is there. but not getting them 
	// 6 are we reloading film. is that the problem? 
	
	if (film === null) return null;
	return (
		<div>
			<CheckoutFilm
			film={film}
			 />
			}
		</div>
		)
	};


FilmPage.propTypes = {
	updateFilm: PropTypes.func.isRequired,
	// getCurrentProfile: PropTypes.func.isRequired,
	getFilmById: PropTypes.func.isRequired,
	film: PropTypes.object.isRequired,
	//profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	//profile: state.profile,
	film: state.film
});

export default connect(mapStateToProps, { updateFilm, getFilmById })(
	withRouter(FilmPage)
);