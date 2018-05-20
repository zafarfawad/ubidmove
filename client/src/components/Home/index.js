import React, { Component } from "react";
import "./style.css";
// import GoogleAutoComplete from "../GoogleAddress/GoogleAutoComplete";
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

