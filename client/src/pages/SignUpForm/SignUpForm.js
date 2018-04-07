import React, { Component } from "react";
// import "./Login.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from "axios";
import API from "../../utils/API";

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import Home from "../../components/Home";
import List from "../../components/List";


class SignUpForm extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    zipcode: "",
    services: "",
    // list:"",

    auth: {
      userId: "",
      username: "",
      isAuthenticated: false
    }
  };

  componentWillMount() {
    axios.get("/auth/isAuthenticated").then(result => {
      const { userId, isAuthenticated, username } = result.data;
      this.setState({
        auth: {
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  //entering username and password
  handleChange = event => {
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  //logging in
  handleSubmit = event => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      zipcode: this.state.zipcode,
      services: this.state.services,
      // list: this.state.list
    };
    this.setState({
      username: "",
      password: "",
      confirmPassword: "",
      zipcode: "",
      services: "",
      // list : ""
    });

    const { name } = event.target;
      console.log(event.target)
    axios.post(name, newUser).then(data => {
      if (data.data.isAuthenticated) {
        const { userId, isAuthenticated, username } = data.data;
        this.setState({ auth: { userId, isAuthenticated, username } });
        this.createVendor(newUser);
      }
    });
  };

  //creating a record in sql for the vendor
  createVendor = newVendorInfo => {
    API.createVendor(newVendorInfo)
      .then(res => console.log("newVendorInfo"))
      .catch(err => console.log(err));
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
          {/* <Route
            exact
            path="/"
            render={() => {
              if (loggedIn) {
                return <Redirect to="/home" />;
              } else {
                return (
                  <SignIn
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    email={this.state.email}
                    password={this.state.password}
                  />
                );
              }
            }}
          /> */}
          <Route
            exact
            path="/signup"
            render={() => {
              if (loggedIn) {
                return <Redirect to="/home" />;
              } else {
                return (
                  <SignUp
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    email={this.state.email}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                    zipcode={this.state.zipcode}
                    services={this.state.services}
                    // list = {this.state.list}
                    
                  />
                );
              }
            }}
          />
          <Route
            exact
            path="/home"
            render={() => {
              if (!loggedIn) {
                return <Redirect to="/" />;
              } else {
                return (
                  <Home
                    handleLogout={this.handleLogout}
                    auth={this.state.auth}
                  />
                );
              }
            }}
          />
        </div>
      </Router>
    );
  }
}

export default SignUpForm;
