import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import { Input, Row, Col } from "react-materialize";


const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class CheckBoxes extends React.Component {
  state = {
    label: [
      "Loading/Unloading",
      "All Apartment",
      "Loading/Unloading",
      "All Apartment ",
      "Loading/Unloading",
      "All Apartment ",
      "Loading/Unloading",
      "All Apartment ",
      "Loading/Unloading",
      "All Apartment ",
      "All Apartment "
    ],
    checked: false
  };

  updateCheck() {
    this.setState(oldState => {
      return {
        checked: !oldState.checked
      };
    });
  }

  render() {
    return (
      <div style={styles.block}>
        <Row>
          <Col s={6}>
            {this.state.label.map((item, index) => (
              <Checkbox
                key={index}
                label={item}
                checked={this.state.checked}
                onCheck={this.updateCheck.bind(this)}
                style={styles.checkbox}
              />
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}

export default CheckBoxes;