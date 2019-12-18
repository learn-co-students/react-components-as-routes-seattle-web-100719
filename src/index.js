import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Signup from './Signup'
import Login from './Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
/* Add basic styling for NavLinks */

 
 

 
 

 
ReactDOM.render((
  <Router>
    <divt>
      <Navbar />
      <Route  path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </divt>
  </Router>),
  document.getElementById('root')
);
