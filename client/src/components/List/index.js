import React from 'react';
import "./style.css";
// import {Link} from 'react-router-dom';
// import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {FormGroup, Label, Input } from "reactstrap";


const List = (props)=> {
	
	return (
    
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" onChange={props.onChange} value={props.value} placeholder="Select an option"  id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
  );

}
export default List;
