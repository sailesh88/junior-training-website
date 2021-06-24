import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Benefits from "./Components/Benefits";
import WhyUs from "./Components/why-us";
import Eligibility from "./Components/Eligibility-Criteria";
import Program from "./Components/Program-Details";
import About from "./Components/About";
import BeforeApply from "./Components/Before-You-Apply";
import App from "./App";

import { render, cleanup, fireEvent, getByText } from '@testing-library/react';
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

it("checking the section Contact exists", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Contact />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Check for the Navigation", () => {

  const { getByText, getByTestId } = render(<App/>);

  let url = "http://localhost/#";

  let headerLinkProp = [
    { title: "Home", id : "home" },
    { title: "Benefits", id :"benefits" },
    { title: "Why Us?", id :"why-us" },
    { title: "Program details", id :"program" },
    { title: "Eligibility criteria", id :"eligibility" },
    { title: "About Qxf2", id :"about" },
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
