import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    return (
      <section id="about" data-testid="about" >
        <Fade duration={1000}>
          <div className="row">
              <h4>
                <a href="https://qxf2.com/">Qxf2 Services</a>
              </h4>
              <p>We are experienced testers working at Qxf2 Services. Qxf2 provides software testing services for startups. We produce a lot of open source material to help testers stay in touch with technical advancements in the field of testing. Qxf2 Services has been conducting a very successful internship program since 2016. Our interns have gone on to work at companies like Mphasis, Accenture, Temenos, Bosch, TCS, Qlik, StrikeTru, Surebot Technology Solutions, Infilect, Plaxonic Technologies and of course Qxf2 Services. Over time, we realized that the way we helped our interns bridge the gap between college and the industry could be applicable to a wider range of engineers. The approach, techniques and tools used in this training program are a result of our learning from our previous internships and our own industry experience.</p>
            </div>
        </Fade>
      </section>
    );
  }
}

export default About;
