import React from 'react';
import ReactDOM from 'react-dom';
import Benefits from '../Benefits';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Benefits/>, div);
});

it("renders Benefits correctly", () => {
   const { getByTestId }  = render(<Benefits/>)
   expect(getByTestId('benefits'));
});

it("Benefits.js matches snapshot", () =>{
  const tree = renderer.create(<Benefits/>).toJSON();
  expect(tree).toMatchSnapshot();
});