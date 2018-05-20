import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import "./style.css";

const names = [
  "King Bed",
  "Queen Bed",
  "Side Tables",
  "Dresser",
  "Couch",
  "TV",
  "Dining Table",
  "Chairs"
];

/**
 * `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 */
export default class checkBoxItems extends Component {
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
