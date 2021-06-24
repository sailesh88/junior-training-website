import React, { Component } from "react";
import Slide from "react-reveal";

class Program extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <section id="program" data-testid="program" >
        <Slide left duration={1300}>
          <div className="row education">
            <div className="eight columns header-col">
              <h1>
                <span>Program Details</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item"></div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="twelve columns header-col">
              <h1>
                <ul>
                  <li>3-months</li>
                  <li>9-hours/day</li>
                  <li>5 days a week</li>
                  <li>Fully remote</li>
                  <li>Pricing</li>
                </ul>
              </h1>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Program;
