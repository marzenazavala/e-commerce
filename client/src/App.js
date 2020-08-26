import React, {useEffect} from 'react';
import {GlobalStyle} from './globalStyles';
import {Switch, Route, Redirect} from "react-router-dom";
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signIn-signUp/SigninSignUp';
import CheckoutPage from './pages/checkout/Checkout';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/userSelectors';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/userActions';


const App = ({checkUserSession, currentUser}) => {


useEffect(()=>{
  checkUserSession()
}, [checkUserSession]) 

    return (
      <div>
        <GlobalStyle/>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' 
          render={()=> currentUser ? 
          (<Redirect to='/'/>) : (<SignInSignUp/>)}/>
        </Switch>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
