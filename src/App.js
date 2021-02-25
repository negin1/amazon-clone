import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from './firebase' 

import './App.css';
import Haeder from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider";



function App() {
      const [{}, dispatch] = useStateValue();


  useEffect(() => {
    //this will only run once ehn thr app component loads 
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);

      if (authUser){
        //the user just logged in /the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out 
         dispatch({
          type: 'SET_USER',
          user: null
         })
      }
    } )
  }, [])
  
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