import React, { Component } from "react";
import Fade from "react-reveal";

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
      <section id="eligibility" data-testid="eligibility" >
                <Fade left duration={1000}>
          <div className="row">
            <Fade bottom>
              <h4>ELIGIBILITY CRITERIA</h4>
            </Fade>
            <div className="twelve columns collapsed">
              <div className="bgrid-quarters s-bgrid-thirds cf">
              <ol>
                  <li>Quick learner</li><p>You should be comfortable with a fast pace. Since we do not provide classroom training, our pace can seem fast for most trainees.</p>
                  <li>Self starter</li><p>Doing a project on your own interest is a good indicator that you will be able to complete the training program.</p>
                  <li>Demoable work</li> <p>You should have a GitHub profile or a project video for hardware projects.</p>
                  <li>Recent graduate</li> <p>This program is available only to 2020 and 2021 graduates.</p>
                </ol>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Eligibility;