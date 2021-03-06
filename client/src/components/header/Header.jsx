import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cartSelectors';
import {selectCurrentUser} from '../../redux/user/userSelectors';
import {signOutStart} from '../../redux/user/userActions';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './Header.styles';


const Header = ({currentUser, hidden, signOutStart}) => {

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">shop</OptionLink>
                <OptionLink to="/contact">contact</OptionLink>
                {
                    currentUser ? 
                    <OptionLink as='div' onClick={signOutStart}>sign out</OptionLink>
                    : 
                    <OptionLink to="/signin">sign in</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            { hidden ? null : <CartDropdown /> }
            </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)