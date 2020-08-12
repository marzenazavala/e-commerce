import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signIn-signUp/SigninSignUp';
import CheckoutPage from './pages/checkout/Checkout';
import {auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/userSelectors';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from './redux/shop/shopSelectors';


class App extends Component {


unsubscribeFromAuth = null

componentDidMount() {
 
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   if(userAuth) {

  //     const userRef = await createUserProfileDocument(userAuth)

  //     userRef.onSnapshot(snapShot => {
  //       setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data()
  //         })
  //       })
  //     };
       
  //     setCurrentUser(userAuth);
  //     //addCollectionAndDocuments('collections', collectionsArray.map(({title, items})=>({title, items})));
  // })
};

componentWillUnmount() {
  this.unsubscribeFromAuth()
};

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' 
          render={()=> this.props.currentUser ? 
          (<Redirect to='/'/>) : (<SignInSignUp/>)}/>
        </Switch>
      </div>
    );


  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
