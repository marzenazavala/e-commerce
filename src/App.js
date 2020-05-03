import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signIn-signUp/SigninSignUp'


function App() {
  return (
    <div>
      <Header/>
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

export default App;
