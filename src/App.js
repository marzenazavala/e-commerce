import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signIn-signUp/SigninSignUp';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/userActions';


class App extends Component {

unsubscribeFromAuth = null


componentDidMount() {

  const {setCurrentUser} = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {

      const userRef = await createUserProfileDocument(userAuth)

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      };
       
    
      setCurrentUser(userAuth)
  })
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
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' 
          render={()=> this.props.currentUser ? 
          (<Redirect to='/'/>) : (<SignInSignUp/>)}/>
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

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch =>({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
