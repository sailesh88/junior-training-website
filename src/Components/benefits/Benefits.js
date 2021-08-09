import React, { Component } from "react";
import Fade from "react-reveal";

class Benefits extends Component {
  render() {
    return (
      <section id="benefits" data-testid="benefits" >
        <Fade duration={1000}>
          <div className="row">
            <Fade bottom>
              <h4>BENEFITS</h4>
            </Fade>
            <div className="twelve columns collapsed">
              <div className="bgrid-quarters s-bgrid-thirds cf">
                <ul>
                  <li>
                    <span
                      style={{
                        color: "green",
                      }}
                    >
                      ✔{" "}
                    </span>
                    Learn to test software
                  </li>

                  <li>
                    {" "}
                    <span
                      style={{
                        color: "green",
                      }}
                    >
                      ✔{" "}
                    </span>
                    Gain hands on testing experience
                  </li>
                  <li>
                    {" "}
                    <span
                      style={{
                        color: "green",
                      }}
                    >
                      ✔{" "}
                    </span>
                    Test real applications
                  </li>

                  <li>
                    {" "}
                    <span
                      style={{
                        color: "green",
                      }}
                    >
                      ✔{" "}
                    </span>
                    Be part of an Agile team
                  </li>

                  <li>
                    {" "}
                    <span
                      style={{
                        color: "green",
                      }}
                    >
                      ✔{" "}
                    </span>
                    Interact, shadow and learn from professional testers
                  </li>

                  <li>
                    {" "}
                    <span
                      style={{
                        color: "green",
                      }}
                    >
                      ✔{" "}
                    </span>
                    Apply modern testing tools and technologies on a daily basis
                    <ul>
                      <li>- JavaScript and/or Python</li>
                      <li>
                        - Test automation -{">"} Selenium and/or Cypress and/or TestCafe, BrowserStack, API tests, Postman
                      </li>
                      <li>- Test reporting using ReportPortal</li>
                      <li>- Test case management with TestRail</li>
                      <li>- Version control with git</li>
                      <li>- Share your code on GitHub</li>
                      <li>- CI/CD with GitHub Actions</li>
                      <li>- Issue tracking with Jira</li>
                    </ul>
                  </li>

                  <li>
                    <span
                      style={{
                        color: "green",
                      }}
                    >
                      ✔{" "}
                    </span>
                    Interview training and mock interviews
                  </li>
                  <li>
                    {" "}
                    <span
                      style={{
                        color: "green",
                      }}
                    >
                      ✔{" "}
                    </span>
                    Detailed resume reviews
                  </li>

                  <li>
                    {" "}
                    <span
                      style={{
                        color: "green",
                      }}
                    >
                      ✔{" "}
                    </span>
                    Weekly talks from industry veterans
                  </li>

                  <li>
                    {" "}
                    <span
                      style={{
                        color: "green",
                      }}
                    >
                      ✔{" "}
                    </span>
                    Guide to becoming an open source contributor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Benefits;
