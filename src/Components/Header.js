import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

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

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
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
              <h4
                style={{
                  textAlign: "justify",
                  color: "white",
                  paddingLeft: 50,
                  paddingRight: 50,
                }}
              >
                Hands on training with real applications. Learn to test
                software, get familiar with modern tools and work with emerging
                technologies.
                <ul>
                  <li>$ Modern tools </li>
                  <li>$ Emerging technologies</li>
                </ul>
                ... Hands on software testing training with real applications
              </h4>
            </Fade>
            <hr />
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
