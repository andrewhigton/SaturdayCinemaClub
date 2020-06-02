import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
//import { Redirect } from 'react-router-dom';
import { updateFilm } from '../../actions/film';
import { updateUserTickets } from '../../actions/auth';
import axios from 'axios';

//next 
// 2 now, how to update the film when booking complete
// 3 sort out this fucking component update 

const StripeCheckoutButton = ({ 
	price, 
	filmData, 
	ticketData, 
	updateFilm, 
  	updateUserTickets,
	history 
	}) => {
	// console.log(filmData)
	// console.log(ticketData)
	//let [ticket, setTicket] = useState(false);
	//console.log(ticket)
	const priceForStripe = price * 100;
			const publishableKey = 'pk_test_GxoLwpaJRAn1kdTQGlL8EwZa00qqtVHbM3';
			const onToken = token => {
			
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
			 	//this.onPayment()
				// updateFilm(filmData, history);
    // 			updateUserTickets(ticketData, history);
			 	// setTicket(true)
			 })
			.catch(error => {
				console.log('Payment error: ', JSON.parse(error)); 	
			 	alert('Payment error. Please use the provided credit card details');	
			 }) 
	} 

	  // const onSubmit = (e) => {
	  //   //console.log(filmData)
	  //   e.preventDefault();
	  //   updateFilm(filmData, history);
	  //   updateUserTickets(ticketData, history);
  	// };
  	const onPayment = () => {
	    console.log('called')
	    //e.preventDefault();
	    updateFilm(filmData, history);
	    updateUserTickets(ticketData, history);
  	};


// 	useEffect(() => {
// 	// if(ticket) {
// 	updateFilm(filmData, history);
//     updateUserTickets(ticketData, history);
// 	// };
// },[updateFilm, updateUserTickets])
	// const onSubmit = e => {
	// 	e.preventDefault();
	// 	createFilm(formData, history);
	// };

	return (
		<div 
		className='how-it-works'
		//onClick={e => onSubmit(e)}
		// onSubmit={handleSubmit}
		>
	

		<StripeCheckout

		label='Pay now'
		name='Crown Clothing'
		billingAddress
		shippingAddress
		image='https://sendeyo.com/up/d/f3eb2117da'
		description={`Your total is £{price}`}
		amount={priceForStripe}
		// amount={priceForStripe}
		panelLabel='Pay now'
		token={onToken}
		stripeKey={publishableKey}
		
		/>
		</div>
		)
	}

// export default StripeCheckoutButton;
const mapStateToProps = state => ({
  film: state.film,
  auth: state.auth
});


export default connect(
  mapStateToProps, { 
  updateFilm, 
  updateUserTickets 
})(StripeCheckoutButton);

// const priceForStripe = price * 100;
// 	const publishableKey = 'pk_test_uccgS5cz3BgmQJF5Jpfi3zhe';
// 	const onToken = token => {
// 		console.log(token);
// 		alert('Payment succesful');
// 	}
// <StripeCheckout
// 		label='Pay Now'
// 		name='Crown Clothing'
// 		billingAddress
// 		shippingAddress
// 		image='https://sendeyo.com/up/d/f3eb2117da'
// 		description={`Your total is ${price}`}
// 		amount={priceForStripe}
// 		panelLabel='Pay now'
// 		token={onToken}
// 		stripeKey={publishableKey}
// 		/>