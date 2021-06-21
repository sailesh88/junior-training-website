import React from 'react';
import ReactDOM from 'react-dom';
import Apply from '../Apply';

import { render, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Apply></Apply>, div);
});

it("renders apply correctly", () => {
   const { getByTestId }  = render(<Apply></Apply>)
   expect(getByTestId('apply'));
})

it("Apply component should have name with the id of Name", () => {
  const {getByTestId } = render(<Apply/>);
  const inputNameNode = getByTestId('name');
  expect(inputNameNode.id).toBe("Name");
});

it("Apply component should have email", () => {
  const {getByTestId } = render(<Apply/>);
  const inputEmailNode = getByTestId('email');
  
  expect(inputEmailNode).toBeInTheDocument();
});

it("Email input should accept text", () => {
  const { getByTestId, getByText } = render(<Apply/>);
  const inputEmailNode = getByTestId('email');
  
  expect(inputEmailNode.value).toMatch("");

  fireEvent.change(inputEmailNode, { target: { value: "testing" } });

  expect(inputEmailNode.value).toMatch("testing");

  const errorMsgNode = getByText("Email not valid");

  // // to check the email validation fails 
  expect(errorMsgNode).toBeInTheDocument();

  fireEvent.change(inputEmailNode, { target: { value: "testing@domain.com" } });

  // to check the email validation passes
  expect(errorMsgNode).not.toBeInTheDocument();
});

it("Should be able to submit the form", () => {
  const mockFn = jest.fn();
  const {getByRole } = render(<Apply handleSubmit={mockFn}/>);
  const buttonNode = getByRole("button");
  fireEvent.submit(buttonNode);
 
  expect(mockFn).toHaveBeenCalledTimes(0);
});


it("matches snapshot", () =>{
  const tree = renderer.create(<Apply></Apply>).toJSON();
  expect(tree).toMatchSnapshot();
});



