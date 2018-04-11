import React, { Component } from "react";
import MultiSelectReact from "multi-select-react";
import axios from "axios";


class DropdDown extends Component {
  constructor() {
    super();
    this.state = {
      multiSelect: [
        { id: 1, label: "Loading/Unloading" },
        { id: 2, label: "All Apartment Sizes" }
      ]
    };
  }

handleSubmit = event => {
	event.preventDefault();

this.state.multiSelect.forEach(function(dropDownItem) {
	console.log(dropDownItem.value);
	if(dropDownItem.value){
	const myData = {
      Options: dropDownItem
	};
	 axios.post("api/whatever", myData).then(results => {
      //whatever...
    });
	}
  });
};


  render() {
    const selectedOptionsStyles = {
      color: "#3c763d",
      backgroundColor: "#dff0d8",

    };
    const optionsListStyles = {
      backgroundColor: "#dff0d8",
      color: "#3c763d",
    };

    return (
      <div style ={{width: 30 +'%'}} >
        <MultiSelectReact
          options={this.state.multiSelect}
          optionClicked={this.optionClicked.bind(this)}
          selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
          selectedOptionsStyles={selectedOptionsStyles}
          optionsListStyles={optionsListStyles}
        />
        <button type="submit" name="/auth/signup" onClick={this.handleSubmit}>
          Sign Up
        </button>      
		</div>
    );
  }

  optionClicked(optionsList) {
    this.setState({ multiSelect: optionsList });
    console.log(optionsList);
  }
  selectedBadgeClicked(optionsList) {
    this.setState({ multiSelect: optionsList });
  }
};
export default DropdDown;