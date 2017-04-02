import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(token => {
      alert(`We are in business, ${token.email}`);
    });
  }

  // ...

  render() {
    return (

          <StripeCheckout
            name="White Shark Ltd"
            description="Record Payment"
            //image="localhost:3001//src/images/WhiteShark.png"
            ComponentClass="div"
            amount={ this.props.amount }
            currency="USD"
            stripeKey="pk_test_7cudEUIoFdvcCsJoAUYyNW1F" //"my_PUBLISHABLE_stripekey"
            locale="en"
            email="info@vidhub.co"
            // Note: Enabling either address option will give the user the ability to
            // fill out both. Addresses are sent as a second parameter in the token callback.
            shippingAddress={false}
            billingAddress={false}
            // Note: enabling both zipCode checks and billing or shipping address will
            // cause zipCheck to be pulled from billing address (set to shipping if none provided).
            zipCode={false}
            alipay
            bitcoin
            allowRememberMe
            token={this.onToken}
            // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
            // you are using multiple stripe keys
            reconfigureOnUpdate={false}
            // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
            // useful if you're using React-Tap-Event-Plugin
            //triggerEvent="onTouchTap"
            >
            <button className="btn btn-primary">
              Pay By Stripe
            </button>
          </StripeCheckout>

   // Use your own child component, which gets wrapped in whatever
   //            component you pass into as "ComponentClass" (defaults to span)






    )
  }
}