import React from 'react';
import "./style.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import ReactPhoneInput from "react-phone-input-2";





const PhoneNumber = (props)=> {
	
	return <div >

      {/* <ReactPhoneInput defaultCountry={"us"} value={props.phoneValue} onChange={props.handleChange} /> */}
      <ReactPhoneInput style ={{fontSize: 30 +'px'}} name='phoneNumber' defaultCountry={"us"} value={props.value} onChange={props.handleChange} />
    </div>;

}
export default PhoneNumber;


