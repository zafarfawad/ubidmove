import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from "axios";
import API from "../../utils/API";

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import Home from "../../components/Home";

// const ReactTags = require('react-tag-autocomplete')


class MainPage extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    auth: {
      userId: "",
      username: "",
      isAuthenticated: false
    },
    tags: [
        { id: 1, name: "Loading/Unloading" },
        { id: 2, name: "All Apartment Sizes" }
    ],
    suggestions: [
        { id: 3, name: "Packing" },
        { id: 4, name: "Unpacking" },
        { id: 5, name: "Moving" },
        { id: 6, name: "State to State" },
        { id: 7, name: "City to City" },
        { id: 8, name: "One Bed Apartment"},
        { id: 9, name: "Two Bed Apartment"},
        { id: 10, name: "Three Bed Apartment" },
        { id: 11, name: "Houses" },
        { id: 12, name: "Piana Moving" }
    ]    
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

  handleDelete (i) {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1)
    this.setState({ tags })
  }
 
  handleAddition (tag) {
    console.log(tag.name);
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags });
  }

  //entering username and password
  handleChange = event => {
    console.log(event.target);
    const { name, value } = event.target;

    this.setState({
      [name]: value

    });

  };

handlePhoneChange = (value) => {
  this.setState({phoneNumber: value});
};

  //logging in
  handleSubmit = event => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    const vendorinfo = {
      userId : this.state.authUserId,
      companyName: this.state.companyName,
      companyAddress: this.state.companyAddress,
      username: this.state.username,
      phoneNumber: this.state.phoneNumber,
      zipcode: this.state.zipcode,
      services:this.state.tags,
    };
    this.setState({
      username: "",
      password: "",
      confirmPassword: "",
    });

    const { name } = event.target;

    axios.post(name, newUser)
    .then(data => {
      if (data.data.isAuthenticated) {
        const { userId, isAuthenticated, username } = data.data;
        const authUserId = data.data.userId
        this.setState({ auth: { userId, isAuthenticated, username } });
        this.createVendor(vendorinfo,authUserId);
      }
    });
  };


  createVendor = (newVendorInfo,authUserId) => {
    API.createVendor(newVendorInfo,authUserId)
      .then(res => console.log("newVendorInfo"))
      .catch(err => console.log(err));
  };

  handleLogout = event => {
    event.preventDefault();
    axios.get("/auth/logout").then(result => {
      this.setState({
        auth: {
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    });
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
          <Route
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
                    username={this.state.username}
                    password={this.state.password}
                  />
                );
              }
            }}
          />
          <Route
            exact
            path="/signup"
            render={() => {
              if (loggedIn) {
                return <Redirect to="/home" />;
              } else {
                return (
                  <SignUp
                    handleChange = {this.handleChange}
                    handlePhoneChange={this.handlePhoneChange}
                    handleSubmit={this.handleSubmit}
                    companyName = {this.state.companyName}
                    companyAddress = {this.state.companyAddress}
                    email={this.state.email}
                    password={this.state.password}
                    confirmPassword ={ this.state.confirmPassword}
                    phoneNumber = {this.state.phoneNumber}
                    zipcode= {this.state.zipcode}
                    tags={this.state.tags} 
                    suggestions={this.state.suggestions}                    
                    handleDelete={this.handleDelete.bind(this)} 
                    handleAddition={this.handleAddition.bind(this)}
                    handleInputChange = {this.handleInputChange}
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

export default MainPage;