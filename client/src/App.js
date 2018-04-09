import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import axios from 'axios';

import Login from "./pages/Login";
import NavBar from "./components/NavBar";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={Login} />

        {/* <Route exact path="/signup" component={SignUpForm} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;