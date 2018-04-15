import React, { Component } from "react";
// import "./style.css";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import NavMenu from "material-ui/svg-icons/navigation/menu";
import MenuItem from "material-ui/MenuItem";
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
      value: 3
    };
  }

  handleChange = (event, index, value) => 
  this.setState
  (
    { 
      value 
    }
  );

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
            <Link to="/home">
              <MenuItem value={1} primaryText="Home" />
            </Link>
            {/* <MenuItem value={2} primaryText="Prescriptions" />
            <MenuItem value={3} primaryText="Pharmacies" /> */}
          </IconMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="UBidMove" />
          <ToolbarSeparator />
          <RaisedButton
            label="Logout"
            primary={true}
            onClick={this.props.handleLogout}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default NavBar;


// import React from "react";
// import { Link } from "react-router-dom";



// import "./style.css";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from "reactstrap";

// // const NavBar = (props)=> {
// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">uBidMove</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink href="/signup">Go to sign up</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">
//                   GitHub
//                 </NavLink>
//               </NavItem>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Options
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>Option 1</DropdownItem>
//                   <DropdownItem>Option 2</DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>Reset</DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>; 
// }
// }

// export default NavBar;
