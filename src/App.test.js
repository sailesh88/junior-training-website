import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Benefits from "./Components/benefits/Benefits";
import WhyUs from "./Components/why-us/why-us";
import Eligibility from "./Components/eligibility-criteria/Eligibility-Criteria";
import Program from "./Components/program-details/Program-Details";
import About from "./Components/about/About";
import BeforeApply from "./Components/before-you-apply/Before-You-Apply";
import App from "./App";

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("checking the section Header exists", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("checking the section Footer exists", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("checking the section BeforeApply exists", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BeforeApply />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("checking the section About exists", () => {
  const div = document.createElement("div");
  ReactDOM.render(<About />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("checking the section Program exists", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Program />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("checking the section WhyUs exists", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WhyUs />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("checking the section Eligibility exists", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Eligibility />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("checking the section Benefits exists", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Benefits />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("checking the section Contact exists", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Contact />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it("Check for the Navigation", () => {

  const { getByText, getByTestId } = render(<App/>);

  let url = "http://localhost/#";

  let headerLinkProp = [
    { title: "Home", id : "home" },
    { title: "Benefits", id :"benefits" },
    { title: "Why Us?", id :"why-us" },
    { title: "Program details", id :"program" },
    { title: "Eligibility", id :"eligibility" },
    { title: "About", id :"about" },
    { title: "Before you apply", id :"before-you-apply" },
    { title: "Apply!", id :"apply" },
  ];

  headerLinkProp.forEach((node) => {
    let location = url + node.id;
    expect(getByText(node.title).href).toBe(location);
    const sectionNode = getByTestId(node.id);
    expect(sectionNode).toBeInTheDocument();

  });

});
