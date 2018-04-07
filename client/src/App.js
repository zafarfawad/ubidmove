import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import axios from 'axios';

// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import Home from "./components/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUpForm";
import SignUpForm from "./pages/SignUpForm";
import NavBar from "./components/NavBar";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Login} />

        {/* <Route exact path="/signup" component={SignUpForm} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;