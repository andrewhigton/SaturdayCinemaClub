import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFilmById, updateFilm } from '../../actions/film';
import CheckoutFilm from '../checkout-film/Checkout-Film'

const BookingPage = ({
	updateFilm,
	getFilmById,
	film: {film, loading},
	match,
	history
}) => {
	
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


const mapStateToProps = state => ({
	film: state.film
});

export default connect(mapStateToProps, { updateFilm, getFilmById })(
	withRouter(BookingPage)
);