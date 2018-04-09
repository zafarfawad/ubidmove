import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import  PhoneNumber from "../PhoneNumber"
import Tags from "../Tags"


import {Label} from "reactstrap";

const SignUp = (props)=> {
  return (
<div className = "signUpPage">
<div className = 'signUpTitle'>
      <h1>SIGN UP</h1>
      <Link to="/signin">Go to sign in</Link>
      <form>
        <label>Company Name </label>
        <br />
        <input style ={{fontSize: 30 +'px'}} value={props.companyName} onChange={props.handleChange} name="companyName" type="text" placeholder="Company Name" />
        <br />
        <label>Company Address</label>
        <br />
        <input style ={{fontSize: 30 +'px'}} value={props.companyAddress} onChange={props.handleChange} name="companyAddress" type="text" placeholder="123 Main st Newyork 11427" />
        <br />
        <label>Email</label>
        <br />
        <input style ={{fontSize: 30 +'px'}} value={props.username} onChange={props.handleChange} name="username" type="email" placeholder="example@email.com" />
        <br />
        <label>Password</label>
        <br />
        <input style ={{fontSize: 30 +'px'}} name="password" type="password" value={props.password} onChange={props.handleChange} />
        <br />
        <label>Confirm Password</label>
        <br />
        <input style ={{fontSize: 30 +'px'}} name="confirmPassword" type="password" value={props.confirmPassword} onChange={props.handleChange} />
        <br />
        <label>Zipcode</label>
        <br />
        <input style ={{fontSize: 30 +'px'}} name="zipcode" type="text" value={props.zipcode} onChange={props.handleChange} />
        <br />
        < Label for = "PhoneNumber" > phone Number </Label>
        < div className = "PhoneNumber" >
        <PhoneNumber handleChange={props.handlePhoneChange} value={props.PhoneNumber} /> 
        </div>
        <br />
      < Label for = "Tags" > Services Provided </Label>
        <Tags tags={props.tags} suggestions={props.suggestions} handleDelete={props.handleDelete} handleAddition={props.handleAddition} handleInputChange = {props.handleInputChange}/>
        <br/>
        <button type="submit" name="/auth/signup" onClick={props.handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>;
  </div>
  )
}

export default SignUp;

{/* // <div>
    //   <h1>SIGN UP</h1>
    //   <Link to="/">Go to sign in</Link>
    //   <form>
    //     <label>Email</label>
    //     <br />
    //     <input value={props.username} onChange={props.handleChange} name="username" type="email" placeholder="example@email.com" />
    //     <br />
    //     <label>Password</label>
    //     <br />
    //     <input name="password" type="password" value={props.password} onChange={props.handleChange} />
    //     <br />
    //     <label>Confirm Password</label>
    //     <br />
    //     <input name="confirmPassword" type="password" value={props.confirmPassword} onChange={props.handleChange} />
    //     <br />
    //     <label>Zipcode</label>
    //     <br />
    //     <input name="zipcode" type="text" value={props.zipcode} onChange={props.handleChange} />
    //     <br />
    //     <label>Services Provided</label>
    //     <br />
    //     <input name="services" type="text" value={props.services} onChange={props.handleChange} />
    //     <br />
    //     <label>dropDown</label>
    //     <br />
    //     <List onChange={props.handleChange} value={props.dropDown} />
    //     <br />

    //     <button type="submit" name="/auth/signup" onClick={props.handleSubmit}>
    //       Sign Up
    //     </button>
    //   </form>
    // </div>; */}


{/* < h1 > SIGN UP < /h1>
  <Link to="/">Go to sign in</Link>
 < /div>
  <Form className = "formCenter">
    <FormGroup class = "formGroup">
      <Label for="exampleEmail">Email</Label > <Input
  value={props.username}
  onChange={props.handleChange}
  name="username"
  type="email"
  placeholder="example@email.com"/> < /FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label > <Input
  name="password"
  type="password"
  value={props.password}
  onChange={props.handleChange}/> < /FormGroup>
    <FormGroup>
      <Label for="exampleConfirmPassword">Password</Label > <Input
  name="confirmPassword"
  type="password"
  value={props.confirmPassword}
  onChange={props.handleChange}/> < /FormGroup>
    <FormGroup>
      <PhoneNumber handleChange={props.handlePhoneChange} value={props.phoneNumber} / > </FormGroup> < FormGroup > <List onChange={props.handleChange} value={props.dropDown}/> < /FormGroup>
    <FormGroup>
      <Label for="exampleText">Text Area</Label > <Input type="textarea" name="text" id="exampleText" value={props.text}/> < /FormGroup>
    <FormGroup check>
      <Label check>
        <Input type="checkbox" / > Terms and Conditions < /Label>
    </FormGroup > <Button type="submit" name="/auth/signup" onClick={props.handleSubmit}>>Submit</Button>
</Form>
</div> */}