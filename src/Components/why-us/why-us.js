import React, { Component } from "react";
import Fade from "react-reveal";

class WhyUs extends Component {
  render() {
    return (
      <section id="why-us" data-testid="why-us" >
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <Fade bottom>
              <h4>WHY US?</h4>
            </Fade>
            <div className="twelve columns collapsed">
              <div className="bgrid-quarters s-bgrid-thirds cf">
                <ol>
                  <li> We are professional testers</li><p>We are professional QA engineers who have an interest in training. All of us work full-time at <a href="https://qxf2.com">Qxf2 Services</a>.</p>
                  <li> No spoonfeeding</li><p>The tasks we assign to you will be very similar to what we do in the industry. You will be forced to think for yourself and solve real problems.</p>
                  <li> Practical ... not theoretical </li><p>Unlike college and other training institutes, all your training is going to be hands-on. </p>
                  <li> No school like approach </li><p>You will recieve minimal guidance. Instead, you will learn by shadowing senior QA engineers and by working on real problems.</p>
                  <li> No syllabus or book knowledge </li><p>The training will not work off a syllabus. We will not provide study materials. You need to do things and learn. </p>
                  <li> Real application </li><p>You will learn how software products are made in the industry by testing a real application.</p>
                </ol>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default WhyUs;
