import React, {useEffect, lazy, Suspense} from 'react';
import {GlobalStyle} from './globalStyles';
import {Switch, Route, Redirect} from "react-router-dom";
import Header from './components/header/Header';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/userSelectors';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/userActions';
import Spinner from './components/spinner/Spinner';

const HomePage = lazy(()=>import('./pages/homePage/HomePage'))
const ShopPage = lazy(()=>import('./pages/shopPage/ShopPage'))
const SignInSignUp = lazy(()=>import('./pages/signIn-signUp/SigninSignUp'))
const CheckoutPage = lazy(()=>import('./pages/checkout/Checkout'))

const App = ({checkUserSession, currentUser}) => {

useEffect(()=>{
  checkUserSession()
}, [checkUserSession]) 

    return (
      <div>
        <GlobalStyle/>
        <Header />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route exact path='/signin' 
            render={()=> currentUser ? 
            (<Redirect to='/'/>) : (<SignInSignUp/>)}/>
          </Suspense>
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
