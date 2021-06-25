import React from 'react';
import ReactDOM from 'react-dom';
import Eligibility from '../Eligibility-Criteria';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Eligibility/>, div);
});

it("renders Eligibility correctly", () => {
   const { getByTestId }  = render(<Eligibility/>)
   expect(getByTestId('eligibility'));
});

it("Eligibility-criteria.js matches snapshot", () =>{
  const tree = renderer.create(<Eligibility/>).toJSON();
  expect(tree).toMatchSnapshot();
});