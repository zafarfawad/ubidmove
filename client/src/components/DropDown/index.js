import React, { Component } from "react";
import MultiSelectReact from "multi-select-react";
import axios from "axios";

const DropDown = (props) =>{

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
          options={props.options}
          // optionClicked={props.optionClicked.bind(this)}
          // selectedBadgeClicked={props.selectedBadgeClicked.bind(this)}
          optionClicked={props.optionClicked}
          selectedBadgeClicked={props.selectedBadgeClicked}
          selectedOptionsStyles={selectedOptionsStyles}
          optionsListStyles={optionsListStyles} 
        />
        <button type="submit" name="SubmitOrderInfo" onClick={props.handleSubmit}>
          Sign Up
        </button>      
		</div>
    );

    
  }

export default DropDown;