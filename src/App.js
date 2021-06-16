import React, { Component } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Benefits from "./Components/Benefits";
import WhyUs from "./Components/why-us";
import Eligibility from "./Components/Eligibility-Criteria";
import Program from "./Components/Program-Details";
import About from "./Components/About";
import BeforeApply from "./Components/Before-You-Apply";
import Apply from "./Components/Apply";

class App extends Component {
  constructor(props) {
    super(props);
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Benefits />
        <WhyUs />
        <Program />
        <Eligibility />
        <About />
        <BeforeApply />
        <Apply />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
