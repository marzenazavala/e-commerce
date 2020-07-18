import React from 'react';
import CustomButton from '../button/CustomButton';
import CartItem from '../cart-item/CartItem';
import {connect} from 'react-redux'
import './cartDropdown.scss';
import {selectCartItems} from '../../redux/cart/cartSelectors';



const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton>checkout</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps, null)(CartDropdown)