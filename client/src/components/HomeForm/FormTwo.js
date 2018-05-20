import React from "react";
import {Row, Col } from "react-materialize";
import { Card, CardTitle } from 'material-ui/Card';
import CheckBoxesItems from "../CheckBoxes/CheckBoxesItems.js";
import CheckBoxesSize from "../CheckBoxes/CheckBoxesSize.js";
import CheckBoxesStairs from "../CheckBoxes/CheckBoxesStairs.js";


const FormTwo = (props)=> {
	
	return <div align="center">
      <Card>
        <CardTitle title="Give us a rough idea of the stuff you're moving" />
        <Row />
        <Row />
        <Row>
          <Col s={8}>
            <div style={{ width: "388px" }}>
              <CheckBoxesStairs handleChange={props.handleStair} value={props.stairValue} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col s={8}>
            <CheckBoxesSize handleChange={props.handleSize} value={props.sizeValue} />
          </Col>
        </Row>
        <Row>
          <Col s={8}>
            <CheckBoxesItems handleChange={props.handleItem} value={props.itemValue} />
          </Col>
        </Row>
        <Row />
      </Card>
    </div>;
  
}

export default FormTwo;