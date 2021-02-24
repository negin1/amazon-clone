import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Haeder from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
     <div className="app">
      <Router>
       <Haeder />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;