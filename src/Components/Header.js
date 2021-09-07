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
              <a className="smoothscroll" href="#home" onClick={() => window.gtag('event', 'Home', {'event_category': 'nav' ,'event_label': 'home'})}>
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#benefits" onClick={() => window.gtag('event', 'Benefits', {'event_category': 'nav' ,'event_label': 'benefits'})}>
                Benefits
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#why-us" onClick={() => window.gtag('event', 'Why us', {'event_category': 'nav' ,'event_label': 'why us'})}>
                Why Us?
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#program" onClick={() => window.gtag('event', 'Program details', {'event_category': 'nav' ,'event_label': 'program details'})}>
                Program details
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#eligibility" onClick={() => window.gtag('event', 'Eligibility', {'event_category': 'nav' ,'event_label': 'eligibility'})}>
                Eligibility
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about" onClick={() => window.gtag('event', 'About', {'event_category': 'nav' ,'event_label': 'about'})}>
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#apply" onClick={() => window.gtag('event', 'Apply', {'event_category': 'nav' ,'event_label': 'apply'})}>
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
                Software testing for freshers!
              </h1>
            </Fade>
            <Fade bottom duration={1200}>
                <p className="sub-title">Join a hands-on <i style={{
                    color: "yellow",
                  }}>SOFTWARE TESTING TRAINING PROGRAM</i> tailored for fresh graduates who prefer practical skills over theory.<br></br><br></br><br></br> In this training program you will:</p>
                <ol>
                  <li class="sub-title">Test a real application</li>
                  <li class="sub-title">Shadow industry professionals</li>
                  <li class="sub-title">Work with a modern toolbelt: Python, JavaScript, Selenium, Cypress, TestCafe, API testing tools, BrowserStack, Jira, git, GitHub, GitHub Actions, TestRail, ReportPortal, etc...</li>
                  <li class="sub-title">Prepare to land an entry level QA job</li>
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
