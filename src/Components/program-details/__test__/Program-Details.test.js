import React from 'react';
import ReactDOM from 'react-dom';
import Program from '../Program-Details';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Program/>, div);
});

it("renders Program correctly", () => {
   const { getByTestId }  = render(<Program/>)
   expect(getByTestId('program'));
});

it("Program-details.js matches snapshot", () =>{
  const tree = renderer.create(<Program/>).toJSON();
  expect(tree).toMatchSnapshot();
});