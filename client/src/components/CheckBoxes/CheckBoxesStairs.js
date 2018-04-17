import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import "./style.css";

const names = [
  "One Flight of Stairs",
  "Two Flight of Stairs",
  "Three Flight of Stairs",
  "Elevator"
];

/**
 * `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 */
export default class checkBoxesStairs extends Component {
  state = {
    values: []
  };

  // handleChange = (event, index, values) => this.setState({ values });

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
            hintText="Are you gonna make us walk?"
            value={this.props.value}
            onChange={this.props.handleChange}
          >
            {this.menuItems(values)}
          </SelectField>
        </div>
        <div>
          <ul>
            <li>{this.props.value}</li>
          </ul>
        </div>
      </div>
    );
  }
}
