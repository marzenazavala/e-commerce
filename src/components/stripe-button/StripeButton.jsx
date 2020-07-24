import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H8BonL2GAXzE7dbroaXxajhGWRopeiyVAoUwGKSB9g6VGUdKPgIT92NpjJZzPlXbJyNiXuU47yL8Mp5DWIWb5EL00RAYdyR94';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name = 'Gato Negro'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton
