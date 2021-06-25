import React from 'react';
import ReactDOM from 'react-dom';
import About from '../About';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About/>, div);
});

it("renders about correctly", () => {
   const { getByTestId }  = render(<About/>)
   expect(getByTestId('about'));
});

it("About.js matches snapshot", () =>{
  const tree = renderer.create(<About/>).toJSON();
  expect(tree).toMatchSnapshot();
});