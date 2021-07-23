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
      <section id="eligibility" data-testid="eligibility" >
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
                <ol>
                  <li>Quick learner</li><p>You should be comfortable with a fast pace. Since we do not provide classroom training, our pace can seem fast for most trainees.</p>
                  <li>Self starter</li><p>Doing a project on your own interest is a good indicator that you will be able to complete the training program.</p>
                  <li>Demoable work</li> <p>You should have a GitHub profile or a project video for hardware projects.</p>
                  <li>Recent graduate</li> <p>This program is available only to 2020 and 2021 graduates.</p>
                </ol>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Eligibility;
