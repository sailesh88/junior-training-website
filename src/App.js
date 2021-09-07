import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Benefits from "./Components/benefits/Benefits";
import WhyUs from "./Components/why-us/why-us";
import Eligibility from "./Components/eligibility-criteria/Eligibility-Criteria";
import Program from "./Components/program-details/Program-Details";
import About from "./Components/about/About";
import Apply from "./Components/apply/Apply";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Benefits />
        <WhyUs />
        <Program />
        <Eligibility />
        <About />
        <Apply />
        <Footer />
      </div>
    );
  }
}

export default App;
