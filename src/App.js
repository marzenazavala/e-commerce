import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signIn-signUp/SigninSignUp';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends Component {
constructor() {
  super();

  this.state={
    currentUser: null
  }
}

unsubscribeFromAuth = null


componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {

      const userRef = await createUserProfileDocument(userAuth)

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        })
      });
       
    }
    this.setState({currentUser: userAuth})
  })
};

componentWillUnmount() {
  this.unsubscribeFromAuth()
};

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInSignUp}/>
          <Route exact path='/tables' component={HomePage}/>
          <Route exact path='/sofas' component={HomePage}/>
          <Route exact path='/chairs' component={HomePage}/>
          <Route exact path='/home' component={HomePage}/>
          <Route exact path='/garden' component={HomePage}/>
  
        </Switch>
      </div>
    );


  }
  
}

export default App;
