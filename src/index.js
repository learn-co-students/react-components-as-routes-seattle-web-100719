import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Login from "./Login";

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      {/* <Route exact path="/" render={() => <h1>Home!!!!</h1>}></Route> */}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/login" component={Login}></Route>
    </div>
  </Router>,
  document.getElementById("root")
);
