import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="row">
              <h2>
                <a href="https://qxf2.com/">Qxf2 Services</a>
              </h2>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
