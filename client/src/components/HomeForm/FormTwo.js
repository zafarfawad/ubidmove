import React from "react";
import { Input, Row, Col } from "react-materialize";
import DatePicker1 from "../DatePicker";
import DropDownHome from "../HomeForm/DropDownHome";
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import CheckBoxes from "../CheckBoxes/CheckBoxes.js";








const FormOne = (props)=> {
	
	return <div align="center">
      <Card>
        <CardTitle title="Give us a rough idea of the stuff you're moving" />
        <Row />
        <Row />

        <Row>
          <Col s={8}>
            <CheckBoxes />
          </Col>
        </Row>
        <Row />
        
        <Row />
        <Row />
        <Row />

      </Card>
    </div>;
  
}

export default FormOne;