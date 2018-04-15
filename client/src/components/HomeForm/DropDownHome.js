import React from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

class DropDownHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 2 };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
      <DropDownMenu value={this.state.value} onChange={this.handleChange} style={{
        width: "50%",
        borderBottom: "2px solid #9e9e9e",
        // backgroundColor: "#ffd699"
      }}>
        <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
        <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
        <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
        <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
      </DropDownMenu>
      </div>
    );
  }
}

export default DropDownHome;
