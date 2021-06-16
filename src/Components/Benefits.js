import React, { Component } from "react";
import Fade from "react-reveal";

class Benefits extends Component {
  render() {
    return (
      <section id="benefits">
        <Fade duration={1000}>
          <div className="row">
            <div className="row">
              <h6
                style={{
                  textAlign: "justify",
                  color: "wheatish",
                  paddingLeft: 50,
                  paddingRight: 50,
                }}
              >
                {" "}
                Why join?
                <ul
                  style={{
                    paddingLeft: 100,
                    fontSize: 14,
                  }}
                >
                  <li>
                    <span
                      style={{
                        color: "green",
                      }}
                    >
                      ✔{" "}
                    </span>
                    How to test software
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
                    Hands on testing experience
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
                    Participate in Agile rituals
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
                    Interact with real testers
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
                    Tools for testing
                    <ul>
                      <li>- GitHub Actions</li>
                      <li>- JavaScript and Python</li>
                      <li>
                        - Test automation -{">"} Selenium, Appium, BrowserStack,
                        API, postman
                      </li>
                      <li>- Test reporting tools - reportportal</li>
                      <li>- Test case management tools</li>
                      <li>- git, GitHub</li>
                      <li>- Jira</li>
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
                    Interview training
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
                    Resume reviews
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
                    Weekly talks (better phrasing needed here)
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
                    Open source contribution
                  </li>
                </ul>
              </h6>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Benefits;
