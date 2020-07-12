import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss'
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';


const Header = ({currentUser, hidden}) => {


    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">shop</Link>
                <Link className="option" to="/contact">contact</Link>
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>sign out</div>
                    : 
                    <Link className="option" to="/signin">sign in</Link>
                }
                <CartIcon />
            </div>
            { hidden ? null : <CartDropdown /> }
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden

})

export default connect(mapStateToProps)(Header)