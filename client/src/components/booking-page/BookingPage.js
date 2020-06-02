import React, { useEffect, useState, Fragment } from 'react';
import { useParams} from 'react-router';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
//import { updateFilm } from '../../actions/film';
import { getFilmById, updateFilm } from '../../actions/film';
import CheckoutFilm from '../checkout-film/Checkout-Film'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';


const FilmPage = ({
	updateFilm,
	getFilmById,
	film: {film, loading},
	match,
	history
}) => {
	// useEffect(() => {
	// 	getFilmById(match.params._id);
 //  	}, [getFilmById]);
//console.log(film)

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
   },[]);

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
		<Fragment>

			<CheckoutFilm
			film={film}
			 />
		<div className='checkout-page'>
          * Please use the following test credit card for payments  
          <br />
          4242 4242 4242 4242 - Exp 01/21 - CVV: 123
        </div>
        </Fragment>
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