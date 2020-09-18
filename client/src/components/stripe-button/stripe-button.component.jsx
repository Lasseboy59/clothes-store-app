import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
// import { response } from 'express';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Y4fLJYDGF3loTXmxtuBrQQ9G00wml5o8VD';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('Payment was succesfull')
      })
      .catch(error => {
        console.log('Payment error', error);
        alert(
          'There was an errror. Please sure you use the provided credit card'
        );
      })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;