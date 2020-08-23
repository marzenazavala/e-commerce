import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripeButton';
import './checkout.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>product</span>
                </div>
                <div className='header-block'>
                    <span>description</span>
                </div>
                <div className='header-block'>
                    <span>quantity</span>
                </div>
                <div className='header-block'>
                    <span>price</span>
                </div>
                <div className='header-block'>
                    <span>remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
            }
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
            <div className='test-warning'>
                *Please use this test credit card data for payments*
                <br/>
                4242 4242 4242 4242 -  exp: 01/23 - cvv: 123
            </div>
            <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)