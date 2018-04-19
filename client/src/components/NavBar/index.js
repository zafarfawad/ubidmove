import React, { Component } from "react";
// import "./style.css";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import NavMenu from "material-ui/svg-icons/navigation/menu";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";

import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      auth: {
        userId: "",
        username: "",
        isAuthenticated: false
      }
    };
  }

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

  handleChange = (event, index, value) =>
    this.setState({
      value
    });

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <IconMenu
            value={this.state.value}
            onChange={this.handleChange}
            iconButtonElement={
              <IconButton touch={true}>
                <NavMenu />
              </IconButton>
            }
          >
            {this.state.auth.isAuthenticated ? (
              <Link to="/">
                <MenuItem value={1} primaryText="Lets move you today" />
              </Link>
            ) : (
              <div>
              {/* <Link to="/signIn">
                <MenuItem value={1} primaryText="Already a Mover?" />
              </Link> */}
               <Link to="/">
                <MenuItem value={2} primaryText="Schedule a Move" />
              </Link>
              {/* <Link to="/signUp">
                <MenuItem value={3} primaryText="Want to become a Mover?" />
              </Link> */}
              </div>
            )}

            {/* <MenuItem value={2} primaryText="Prescriptions" />
            <MenuItem value={3} primaryText="Pharmacies" /> */}
          </IconMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="UBidMove" />
          <ToolbarSeparator />
          {this.state.auth.isAuthenticated ? (
            <RaisedButton
              label="Logout"
              primary={true}
              onClick={this.props.handleLogout}
            />
          ) : (
            <RaisedButton
              label="Login"
              primary={true}
              onClick={this.props.handleLogout}
            />
          )}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default NavBar;
