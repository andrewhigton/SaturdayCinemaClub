import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
			const publishableKey = 'pk_test_uccgS5cz3BgmQJF5Jpfi3zhe';
			const onToken = token => {
		console.log(token);
		alert('Payment succesful. We have sent your tickets to your email address and will notify when the film has been booked');
		//do it here, can redirect to another page? 
		//to send email confirmation, plus a note 
	} 

	// const onSubmit = e => {
	// 	e.preventDefault();
	// 	createFilm(formData, history);
	// };

	return (
		<div className='how-it-works'>
			
		<StripeCheckout
		label='Pay now'
		name='Crown Clothing'
		billingAddress
		shippingAddress
		image='https://sendeyo.com/up/d/f3eb2117da'
		description={`Your total is 20`}
		// amount={priceForStripe}
		panelLabel='Pay now'
		token={onToken}
		stripeKey={publishableKey}
		success_url='localhost:3000/landing' 
		/>
		</div>
		)
	}

export default StripeCheckoutButton;


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