import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { checkoutSuccess } from '../../redux/cart/cart.actions';
//import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, history, checkoutSuccess }) => {
  const priceForStripe = price * 100;

  const publishableKey = 'pk_test_XvdeMqcb7qIuXtDmxPrXJVGJ00ipIb7ymf';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        console.log(token);
        alert('Payment Successful!');
        checkoutSuccess();
        history.push('/');
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert('There was an issue with your payment.');
      });

    
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Keenok Togo'
      billingAddress
      shippingAddress
      image='./dist/img/crow-pngrepo-com.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkoutSuccess: () => dispatch(checkoutSuccess()),
});

export default withRouter(
  connect(null, mapDispatchToProps)(StripeCheckoutButton)
);
