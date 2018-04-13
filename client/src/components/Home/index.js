import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import DropDown from "../DropDown";
import API from "../../utils/API";
import MultiSelectReact from "multi-select-react";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      zipcodes: [],
      services: [],
      selectedZipcodes: [],
      selelectedServices: [],
      multiSelect: [
        { id: 1, label: "Loading/Unloading" },
        { id: 2, label: "All Apartment Sizes" }
      ]
    };
  }

  // { id: 1, label: "Loading/Unloading" },
  // { id: 2, label: "All Apartment Sizes" }

  componentDidMount() {
    console.log(this.state.zipcodes);
    // this.getService();
    this.getZipCode();
  }

  handleSubmit = event => {
    event.preventDefault();

    const lookUpValue = {
      zipcode: this.selectZipcode(),
      service: this.selectService()
    };

    // this.state.multiSelect.forEach(function(dropDownItem) {
    //   console.log(dropDownItem.value);
    //   if (dropDownItem.value) {
    //     const myData = {
    //       Options: dropDownItem
    //     };
    //     axios.post("api/whatever", myData).then(results => {
    //       //whatever...
    //     });
    //   }
    // });
  };

  dropDownDB = DropDownValues => {
    API.createVendor(DropDownValues)
      .then(res => console.log("newVendorInfo"))
      .catch(err => console.log(err));
  };

  getZipCode = () => {
    API.getZipCode()
      .then(res => {
        const zipcodes = res.data.map(zipcode => zipcode.value);
        this.setState({
          zipcodes
        });
      })
      .catch(err => console.log(err));
  };

  getService = () => {
    API.getService()
      .then(res =>
        this.setState({
          services: res.data
        })
      )
      .catch(err => console.log(err));
  };

  selectZipcode = () => {
    this.state.zipcodes.forEach(function(zipcode) {
      console.log(zipcode.value);

      // if (zipcode.value) {
      //   const zipcodeDB = {
      //     value: zipcode
      //   };
      // }
    });
  };

  selectService = () => {
    this.state.services.forEach(function(service) {
      console.log(service.value);
      if (service.value) {
        const serviceDB = {
          value: service
        };
      }
    });
  };

  // optionClicked = optionsList => {
  //   console.log("options clicked");
  //   this.setState({ zipcodes: optionsList });
  //   console.log(optionsList);
  // };
  // selectedBadgeClicked = optionsList => {
  //   console.log("selected badge clicked");
  //   this.setState({ zipcodes: optionsList });
  // };

  optionClicked(optionsList) {
    this.setState({ zipcodes: optionsList });
    console.log(optionsList);
  }
  selectedBadgeClicked(optionsList) {
    this.setState({ zipcodes: optionsList });
  }

  render() {
      const selectedOptionsStyles = {
      color: "#3c763d",
      backgroundColor: "#dff0d8",

    };
    const optionsListStyles = {
      backgroundColor: "#dff0d8",
      color: "#3c763d",
    };
    return (
      <div>
        <h1>You should only see this if you are logged in!</h1>
        <p>{this.props.auth.username}</p>

        <button onClick={this.props.handleLogout}>Log Out</button>
        <br />
        <br />
        <br />

      <div style ={{width: 30 +'%'}} >
        <MultiSelectReact
          options={this.state.zipcodes}
          optionClicked={this.optionClicked.bind(this)}
          selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
          selectedOptionsStyles={selectedOptionsStyles}
          optionsListStyles={optionsListStyles}
        />
        <button type="submit" name="/auth/signup" onClick={this.handleSubmit}>
          Sign Up
        </button>      
		</div>
    </div>
    );
  }
}
export default Home;

{
  /* <div className="row">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <button data-slide="next">Next</button>
              </ol>
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <div>
                    <h1>This shit sucks</h1>
                    <button className="btn btn-warning">
                      This is Button
                    </button>
                    <img className="d-block w-100" src="https://www.stroke-education.org.uk/wp-content/uploads/500x250.gif" alt="First slide" />
                  </div>
                </div>

                <div className="carousel-item">
                  <div>
                    <h1>This shit sucks</h1>
                    <button className="btn btn-warning">
                      This is Button
                    </button>
                    <img className="d-block w-100" src="https://www.stroke-education.org.uk/wp-content/uploads/500x250.gif" alt="Second slide" />
                  </div>
                </div>

                <div className="carousel-item">
                  <div>
                    <h1>This shit sucks</h1>
                    <button className="btn btn-warning">
                      This is Button
                    </button>
                    <img className="d-block w-100" src="https://www.stroke-education.org.uk/wp-content/uploads/500x250.gif" alt="Third slide" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>; */
}
