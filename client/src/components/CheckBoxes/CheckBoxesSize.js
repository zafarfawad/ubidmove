import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import "./style.css";

const names = [
  "2-3 Bedroom House",
  "3-5 Bedroom House",
  "Studio Apartment",
  "One Bed Apartment",
  "Two Bed Apartment",
  "Three Bed Apartment"
];

export default class checkBoxSize extends Component {
  state = {
    values: []
  };

  // handleChange = (event, index, values) =>
  // this.setState({ values });

  menuItems(values) {
    return names.map(name => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }

  render() {
    const { values } = this.state;
    return (
      <div>
        <div>
          <SelectField
            // multiple={true}
            hintText="Size of your place"
            value={this.props.value}
            onChange={this.props.handleChange}
          >
            {this.menuItems(values)}
          </SelectField>
        </div>
        {/* <div>
          <ul>
              <li>{this.props.value}</li>
          </ul>
        </div> */}
      </div>
    );
  }
}
