import React from "react";
import API from "../../utils/API";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import FormOne from "../HomeForm/FormOne";
import FormTwo from "../HomeForm/FormTwo";
import moment from "moment";


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
    mDate:"",
    mTime:""
  };

  handleStairChange = (event, index, stairValue) => {
    this.setState({ stairValue });
  };

  handleSizeChange = (event, index, sizeValue) => {
    this.setState({
      sizeValue
    });
  };

  handleItemChange = (event, index, itemValue) => {
    this.setState({ itemValue });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleDate = (event, date) => {
    
    const mDate = moment(new Date(date)).format('MMMM Do YYYY');
    this.setState({ mDate: mDate });
    this.setState({ dateValue: date });
  };

  handleTime = (event, time) => {
  const mTime = moment(new Date(time)).format("h:mm a");
  this.setState({ mTime: mTime });
    this.setState({ timeValue: time });
  };

  handleSubmit = event => {
    // event.preventDefault();

    const moverInfo = {
        userMoveFromAddress: this.state.fromAddress,
        userMoveToAddress: this.state.toAddress,
        userMoveDate: this.state.mDate,
        userMoveTime: this.state.mTime,
        userMoveSize: this.state.sizeValue,
        userMoveItem: this.state.itemValue
    };
      this.setState({
        stepIndex: 0,
        finished: false,
        fromAddress: "",
        toAddress: "",
        dateValue: {},
        mDate: "",
        timeValue: {},
        mTime:"",
        stairValue: "",
        sizeValue: "",
        itemValue: []
      });


    API.moverOrder(moverInfo)
      .then(res => console.log("the order has been posted to DB"))
      .catch(err => console.log(err));
  };

  handleNext = event => {
    event.preventDefault();

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
                You are moving on <h5>
                  {this.state.mDate} at {this.state.mTime}
                </h5>
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
                  {" "}{this.state.itemValue}{" "}
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
            this.handleSubmit()
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