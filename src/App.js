import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
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
