import React from "react";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import FormOne from "../HomeForm/FormOne";
import FormTwo from "../HomeForm/FormTwo";


/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class Carousel extends React.Component {
  state = {
    finished: false,
    stepIndex: 0
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = () => {
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
          <FormOne />
          </div>
        );
      case 1:

        return (
        <div>
          <FormTwo />
          </div>
        )
      case 2:
        return (
        <div>
          </div>
        )
      default:
        return "You're a long way from home sonny jim!";
    }
  }

  render() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: "0 16px" };

    return (
      <div style={{ width: "75%", margin: "auto" ,height :"100%"}}>
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
                  this.setState({ stepIndex: 0, finished: false });
                }}
              >
                Click here
              </a>{" "}
              to reset the example.
            </p>
            </div>
          ) : (
            <div>
              <div>{this.getStepContent(stepIndex)}</div>
              <div style={{ marginTop: 25, marginLeft:"45%"}}>
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