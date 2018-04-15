import React from "react";
import { Input, Row, Col } from "react-materialize";
import DatePicker1 from "../DatePicker";
import DropDownHome from "../HomeForm/DropDownHome";
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';








const FormOne = (props)=> {
	
	return <div align="center">
      <Card>
        <CardTitle title="Choose your moving Date" />
        <Row />
        <Row />

        <Row>
          <Col s={8} m={8} l={6} offset="m2 l3">
            <Input s={8} label="From Address" />
          </Col>
        </Row>
        <Row />
        <Row>
          <Col s={8} m={8} l={6} offset="m2 l3">
            <Input s={8} label="To Address" />
          </Col>
        </Row>
        <Row />
        <Row />
        <Row>
          <Col s={8} m={8} l={6} offset="m2 l3">
            <DatePicker1 />
          </Col>
        </Row>
        <Row />
        <Row />
        <Row>
          <Col>
            <DropDownHome />
          </Col>
        </Row>
        <br />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </Card>
    </div>;
  
}

export default FormOne;