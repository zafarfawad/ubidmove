import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

import "./style.css";

const names = [
  "43434",
  "34343",
  "34344",
  "54432",
  "43631",
  "55442",
  "34111",
  "43478"
];

/**
 * `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 */
export default class CheckBoxesZipCode extends Component {
  state = {
    values: []
  };

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
            multiple={true}
            hintText="Create a list of items"
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
