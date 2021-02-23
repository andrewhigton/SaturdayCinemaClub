import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { updateFilm } from '../../actions/film';
import { updateUserTickets } from '../../actions/auth';
import axios from 'axios';

const StripeCheckoutButton = ({ 
	price, 
	filmData, 
	ticketData, 
	updateFilm, 
  	updateUserTickets,
	history 
	}) => {

	const priceForStripe = price * 100;
			const publishableKey = 'pk_test_GxoLwpaJRAn1kdTQGlL8EwZa00qqtVHbM3';
			
			const onToken = token => {
			if(priceForStripe === '' || priceForStripe < 1) {
				alert('Please add tickets before submitting');	
				return; 
			}
			axios({ 
				url: '/api/film/payment', 
				method: 'post',
				data: {
					amount: priceForStripe,
					token
				}
			 }, onPayment())
			.then(response => {
			 	alert('Payment succesful. We have sent your tickets to your email address and will notify when the film has been booked');	
			 	window.location.replace('http://localhost:3000/film/dashboard');
			 })
			.catch(error => {
				console.log('Payment error: ', JSON.parse(error)); 	
			 	alert('Payment error. Please use the provided credit card details');	
			 }) 
	} 

  	const onPayment = () => {
	    updateFilm(filmData, history);
	    updateUserTickets(ticketData, history);
  	};

	return (
		<div 
		className='how-it-works'>
		<StripeCheckout
		label='Pay now'
		name='Saturday Cinema Club'
		billingAddress
		shippingAddress
		description={`Your total is £${price}`}
		amount={priceForStripe}
		panelLabel='Pay now'
		token={onToken}
		stripeKey={publishableKey}
		style={{'margin':'2vh 0vh 0vw -5vw'}}
		/>
		</div>
		)
	}

const mapStateToProps = state => ({
  film: state.film,
  auth: state.auth
});

export default connect(
  mapStateToProps, { 
  updateFilm, 
  updateUserTickets 
})(StripeCheckoutButton);