import React, { Component } from "react";
// import React from 'react';
import "./style.css";
import DropdDown from "../DropDown";

const Home = (props) =>{
  // classNameNameName Home extends Component {
  //   state = {
  //   dropdown: "",
  //   }
    // render() {
      return <div>
          <h1>You should only see this if you are logged in!</h1>
          <p>{props.auth.username}</p>

          <button onClick={props.handleLogout}>Log Out</button>
          <br />
          <br />
          <br />

          <DropdDown />
          <div className="row">
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
        </div>;
    }
  // }
export default Home;