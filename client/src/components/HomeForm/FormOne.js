import React from "react";
import { Input, Row, Col } from "react-materialize";
import DatePicker1 from "../DatePicker";
import TimePicker1 from "../HomeForm/TimePicker";
import { Card, CardTitle } from 'material-ui/Card';








const FormOne = (props)=> {
	
	return <div align="center">
      <Card>
        <CardTitle title="Choose your moving Date" />
        <Row />
        <Row />

        <Row>
          <Col s={8} m={8} l={6} offset="m2 l3">
            <Input s={8} label="From Address" name="fromAddress" value={props.fromAddress} onChange={props.handleChange} />
          </Col>
        </Row>
        <Row />
        <Row>
          <Col s={8} m={8} l={6} offset="m2 l3">
            <Input s={8} label="To Address" name="toAddress" value={props.toAddress} onChange={props.handleChange} />
          </Col>
        </Row>
        <Row />
        <Row />
        <Row>
          <Col s={8} m={8} l={6} offset="m2 l3">
            <DatePicker1 name="datePicker" value={props.date} onChange={props.handleDateChange} />
          </Col>
        </Row>
        <Row />
        <Row />
        <Row>
          <Col>
            <TimePicker1 name="timePicker" value={props.timePicker} handleChangeTimePicker={props.handleTimeChange} />
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