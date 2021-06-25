import React from 'react';
import ReactDOM from 'react-dom';
import WhyUs from '../why-us';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

it('renders WhyUs crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WhyUs/>, div);
});

it("renders Benefits correctly", () => {
   const { getByTestId }  = render(<WhyUs/>)
   expect(getByTestId('why-us'));
});

it("Why-us.js matches snapshot", () =>{
  const tree = renderer.create(<WhyUs/>).toJSON();
  expect(tree).toMatchSnapshot();
});