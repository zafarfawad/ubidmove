import React from "react";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import FormOne from "../HomeForm/FormOne";
import FormTwo from "../HomeForm/FormTwo";


class Carousel extends React.Component {
  state = {
    finished: false,
    stepIndex: 0,
    fromAddress: "",
    toAddress: "",
    dateValue: {},
    timeValue: {},
    stairValue: "",
    sizeValue: "",
    itemValue:[],
  };

  handleStairChange = (event, index, stairValue) => {
    console.log(stairValue);
    this.setState({ stairValue });
  };

  handleSizeChange = (event, index, sizeValue) => {
    console.log(sizeValue);
    this.setState({
      sizeValue
    });
  };

  handleItemChange = (event, index, itemValue) => {
    console.log(itemValue);
    this.setState({ itemValue });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleDate = (event, date) => {
    console.log(date);
    this.setState({ dateValue: date });
  };

  handleTime = (event, time) => {
    // console.log(time);
    this.setState({ timeValue: time });
  };

  // handleChangeTimePicker12 = (event, date) => {
  //   this.setState({ value12: date });
  // };

  handleNext = event => {
    event.preventDefault();
    console.log('fawad',this.state.timeValue);

    // fromAddress: this.state.fromAddress;
    // toAddress: this.state.toAddress;
    // dateValue: this.state.dateValue;
    // timeValue: this.state.timeValue;
    // stairValue: this.state.stairValue;

    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = event => {
    event.preventDefault();
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <FormOne
              fromAddress={this.state.fromAddress}
              toAddress={this.state.toAddress}
              date={this.state.dateValue}
              handleChange={this.handleChange}
              handleDateChange={this.handleDate}
              handleTimeChange={this.handleTime}
              timePicker={this.state.timeValue}
            />
          </div>
        );
      case 1:
        return (
          <div>
            <FormTwo
              handleStair={this.handleStairChange}
              stairValue={this.state.stairValue}
              handleSize={this.handleSizeChange}
              sizeValue={this.state.sizeValue}
              handleItem={this.handleItemChange}
              itemValue = {this.state.itemValue}
            />
          </div>
        );
      case 2:
        return <div>
            <div>
              <span>
                You are moving from <h5>{this.state.fromAddress}</h5>
              </span>
              <span>
                {" "}
                You are moving to <h5>{this.state.toAddress}</h5>
              </span>
              <span>
                {" "}
                You have <h5>{this.state.stairValue}</h5>
              </span>
              <span>
                {" "}
                Your place is a <h5>{this.state.sizeValue}</h5>
              </span>
              <span>
                {" "}
                You have the following items <h5>
                  {this.state.itemValue}
                </h5>
              </span>
            </div>
            <div />
          </div>;
      default:
        return "You're a long way from home sonny jim!";
    }
  }

  render() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: "0 16px" };

    return (
      <div style={{ width: "75%", margin: "auto", height: "100%" }}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>When do you want to move ?</StepLabel>
          </Step>
          <Step>
            <StepLabel>Give us an idea of what you are moving</StepLabel>
          </Step>
          <Step>
            <StepLabel>Looks Good ? </StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <div>
              <p>
                <a
                  href="#"
                  onClick={event => {
                    event.preventDefault();
                    this.setState({
                      stepIndex: 0,
                      finished: false,
                      fromAddress: "",
                      toAddress: "",
                      dateValue: {},
                      timeValue: {},
                      stairValue: "",
                      sizeValue: "",
                      itemValue:[],
                    
                    });
                  }}
                >
                  Click here
                </a>{" "}
                to reset the example.
                {this.state.fromAddress}
                {this.state.toAddress}
              </p>
            </div>
          ) : (
            <div>
              <div>{this.getStepContent(stepIndex)}</div>
              <div style={{ marginTop: 25, marginLeft: "45%" }}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{ marginRight: 12 }}
                />
                <RaisedButton
                  label={stepIndex === 2 ? "Finish" : "Next"}
                  primary={true}
                  onClick={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Carousel;