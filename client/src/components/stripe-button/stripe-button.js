import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
			const publishableKey = 'pk_test_uccgS5cz3BgmQJF5Jpfi3zhe';
			const onToken = token => {
		console.log(token);
		alert('Payment succesful');
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