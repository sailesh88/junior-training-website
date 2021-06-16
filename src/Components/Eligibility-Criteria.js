import React, { Component } from "react";
import Slide from "react-reveal";

class Eligibility extends Component {
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
      <section id="eligibility">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="eight columns header-col">
              <h1>
                <span>Eligibility Criteria</span>
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
                  <li>Fast pace - not for everyone </li>
                  <li>Should have done a project outside of college </li>
                  <li>
                    Should have a GitHub profile or a hardware project video{" "}
                  </li>
                  <li>2021 pass outs </li>
                </ul>
              </h1>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Eligibility;
