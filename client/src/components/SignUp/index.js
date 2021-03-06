import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import  PhoneNumber from "../PhoneNumber"


import {Label} from "reactstrap";

// const style = {
//   marginLeft: 20
// };

const SignUp = (props)=> {
  return <div className="signUpPage">
      <div className="signUpTitle">
        <h1>SIGN UP</h1>
        <Link to="/signin">Go to sign in</Link>
        <form>
          <label>Company Name </label>
          <br />
          <input style={{ fontSize: 30 + "px" }} value={props.companyName} onChange={props.handleChange} name="companyName" type="text" placeholder="Company Name" />
          <br />
          <label>Company Address</label>
          <br />
          <input style={{ fontSize: 30 + "px" }} value={props.companyAddress} onChange={props.handleChange} name="companyAddress" type="text" placeholder="123 Main st Newyork 11427" />
          <br />
          <label>Email</label>
          <br />
          <input style={{ fontSize: 30 + "px" }} value={props.username} onChange={props.handleChange} name="username" type="email" placeholder="example@email.com" />
          <div>
            <span value = {props.usernameError} name = "usernameError" ></span>
            </div>
          <br />
          <label>Password</label>
          <br />
          <input style={{ fontSize: 30 + "px" }} name="password" type="password" value={props.password} onChange={props.handleChange} />
          <br />
          <label>Confirm Password</label>
          <br />
          <input style={{ fontSize: 30 + "px" }} name="confirmPassword" type="password" value={props.confirmPassword} onChange={props.handleChange} />
          <br />
          <Label for="PhoneNumber"> phone Number </Label>
          <div style={{ fontSize: 30 + "px" }} className="PhoneNumber">
            <PhoneNumber handleChange={props.handlePhoneChange} value={props.PhoneNumber} />
          </div>
          <br />
          {/* <Label for="Tags"> Services Provided </Label> */}
          {/* <Tags tags={props.tags} suggestions={props.suggestions} handleDelete={props.handleDelete} handleAddition={props.handleAddition} handleInputChange={props.handleInputChange} /> */}
          <br />
          <button id= "signUpButton" type="submit" name="/auth/signup" onClick={props.handleSubmit} disabled= {props.disabled} >
            Sign Up
          </button>
        </form>
      </div>
    </div>;
}

export default SignUp;
