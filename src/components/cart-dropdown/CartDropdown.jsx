import React from 'react';
import CustomButton from '../button/CustomButton';
import CartItem from '../cart-item/CartItem';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './cartDropdown.scss';
import {selectCartItems} from '../../redux/cart/cartSelectors';
import {toggleCartHidden} from '../../redux/cart/cartActions';
import {createStructuredSelector} from 'reselect';



const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden())
            }}>
                checkout
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown))