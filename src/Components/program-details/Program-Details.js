import React, { Component } from "react";
import Fade from "react-reveal";

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
        <Fade left duration={1000}>
          <div className="row">
            <Fade bottom>
              <h4>PROGRAM DETAILS</h4>
            </Fade>
            <div className="twelve columns collapsed">
              <div className="bgrid-quarters s-bgrid-thirds cf">
              <ol>
                  <li>Duration: 3-months</li><p>This is an intense 3-month program. We will be giving you hands-on experience testing a real product.</p>
                  <li>Time commitment: 9-hours/day</li><p>You need to be available from 10 am to 7 pm every day.</p>
                  <li>5 days a week</li><p>You are expected to work Mon-Fri every week.</p>
                  <li>Fully remote</li><p>The training is completely remote. You will not have any classroom training.</p>
                  <li>Toolbelt: Industry standard tools</li><p>Python and/or JavaScript, Selenium and/or Cypress and/or TestCafe, Jira, ReportPortal, BrowserStack, APIs, Postman, git, GitHub, GitHub Actions, etc.</p>
                  <li>Pricing</li><p>The program costs INR 15,000 for the entire three month duration. The payment will happen at the start of the course and there are no refunds.</p>
                </ol>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Program;
