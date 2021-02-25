import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Haeder from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
      <Router>
       <div className="app">
       
        <Switch>
           <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
           <Haeder />
            <Checkout />
          </Route>
          <Route path="/">
           <Haeder />
            <Home />
          </Route>
        </Switch>
           </div>
      </Router>
 
  );
}
export default App;