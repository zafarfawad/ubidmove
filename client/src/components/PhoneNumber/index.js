import React from 'react';
import "./style.css";
// import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import ReactPhoneInput from "react-phone-input-2";





const PhoneNumber = (props)=> {

   const selectedOptionsStyles = {
  
//     width: "350px",
    fontSize: "30px",
    fontsize: "30px",
    padding: "45px",
    width: "150.5%",
    marginleft: "inherit",
    borderradius: "0px"
      

    };


	
	return <div >
      {/* <ReactPhoneInput defaultCountry={"us"} value={props.phoneValue} onChange={props.handleChange} /> */}
      <ReactPhoneInput 
      name="phoneNumber" 
      defaultCountry={"us"} 
      value={props.value} 
      onChange={props.handleChange}
      inputStyle={selectedOptionsStyles}
      onlyCountries = {["us"]}
      />
    </div>;

}
export default PhoneNumber;


