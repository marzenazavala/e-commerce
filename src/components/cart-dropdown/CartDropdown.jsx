import React from 'react';
import CustomButton from '../button/CustomButton';
import './cartDropdown.scss';



const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>checkout</CustomButton>
    </div>
)


export default CartDropdown