import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import DropDown from "../DropDown";
import API from "../../utils/API";
import MultiSelectReact from "multi-select-react";
import NavBar from "../NavBar";
import Carousel from "../Carousel";
import GoogleAutoComplete from "../GoogleAddress/GoogleAutoComplete";
import CheckBoxesZipcode from "./CheckBoxesZipcode"


class Home extends Component {
  constructor() {
    super();
    this.state = {
      zipCode: []
    };
  }

  // { id: 1, label: "Loading/Unloading" },
  // { id: 2, label: "All Apartment Sizes" }

  handleItemChange = (event, index, zipCode) => {
    console.log(zipCode);
    this.setState({ zipCode });
  };

  render() {
    return (
      <div>
        <CheckBoxesZipcode handleChange={this.handleItemChange} value = {this.state.zipCode}/>
      </div>
    );
  }
}
export default Home;

