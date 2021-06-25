import React from 'react';
import ReactDOM from 'react-dom';
import Before from '../Before-You-Apply';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Before/>, div);
});

it("renders before you apply file correctly", () => {
   const { getByTestId }  = render(<Before/>)
   expect(getByTestId('before-you-apply'));
});

it("before-you-apply.js file matches snapshot", () =>{
  const tree = renderer.create(<Before/>).toJSON();
  expect(tree).toMatchSnapshot();
});