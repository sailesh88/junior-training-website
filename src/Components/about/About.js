import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    return (
      <section id="about" data-testid="about" >
        <Fade duration={1000}>
          <div className="row">
            <div className="row">
              <h4>
                <a href="https://qxf2.com/">Qxf2 Services</a>
              </h4>
              <p>We are experienced testers working at Qxf2 Services. Qxf2 provides software testing services for startups. We produce a lot of open source material to help testers stay in touch with technical advancements in the field of testing. We have been running a training program for senior QA engineers since 2019. Before launching this training program, we spent many years fine tuning our approach via many internships. Our interns have gone on to be placed at good companies soon after completing our internship program. The approach, techniques and tools used in this training program are a result of our learning from our previous internship and our own industry experience.</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
