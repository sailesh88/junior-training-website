import React, { Component } from "react";
import Fade from "react-reveal";

class WhyUs extends Component {
  render() {
    return (
      <section id="why-us" data-testid="why-us" >
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <Fade bottom>
              <h4 className="">Why us?</h4>
            </Fade>
            <div className="twelve columns collapsed">
              <div className="bgrid-quarters s-bgrid-thirds cf">
                <ul>
                  <li> Professional testers teach you </li>
                  <li> No spoonfeeding </li>
                  <li> Practical ... not theoretical </li>
                  <li> No school like approach </li>
                  <li> No syllabus or book knowledge </li>
                  <li> Real application </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default WhyUs;
