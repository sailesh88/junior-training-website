import React, { Component } from "react";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    return (
      <header id="home" data-testid="home" >
        <nav id="nav-wrap">
          {/* Navbar brand
          <a className="logo" href="#home">
            <img src="images/qxf2_logo.png" width="30" height="30" alt="Logo" />
          </a> */}

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#benefits">
                Benefits
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#why-us">
                Why Us?
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#program">
                Program details
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#eligibility">
                Eligibility criteria
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About Qxf2
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#before-you-apply">
                Before you apply
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#apply">
                Apply!
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">
                No more classroom training!
              </h1>
            </Fade>
            <Fade bottom duration={1200}>
                <p className="sub-title">We have developed a <u>hands-on</u> training program suitable for fresh graduates who prefer <u>practical skills over theory</u>.<br></br><br></br><br></br><br></br> In this training program you will:</p>
                <ol>
                  <li class="sub-title">Test a real application</li>
                  <li class="sub-title">Shadow industry professionals</li>
                  <li className="sub-title">Work with a modern toolbelt: Python, JavaScript, Selenium, Cypress, TestCafe, BrowserStack, Jira, git, GitHub, GitHub Actions, TestRail, ReportPortal, etc.</li>
                </ol>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#benefits">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
