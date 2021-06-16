import React, { Component } from "react";
import Fade from "react-reveal";

class BeforeApply extends Component {
  render() {
    return (
      <section id="before-you-apply">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <Fade bottom>
              <h4 className="">Before you apply!</h4>
            </Fade>
            <div className="twelve columns collapsed">
              <div className="bgrid-quarters s-bgrid-thirds cf">
                <ul>
                  <li> Fully remote </li>
                  <li> Not for everyone </li>
                  <li> Fast pace - we will not wait for you </li>
                  <li> No placement guarantee </li>
                  <li> No money back </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default BeforeApply;
