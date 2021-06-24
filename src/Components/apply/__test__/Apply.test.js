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

  // to check the email validation fails 
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

it("Test", () => {

  const { getByTestId, getByText } = render(<Apply/>);
  let inputProps = [
    { testId: "email", val :"testing" },
    { testId: "name", val :"Sailesh" },
    { testId: "college", val :"collegeName" },
    { testId: "course", val :"MS" },
    { testId: "branch", val :"EEE" },
    // { testId: "year", val :"2021" },
    { testId: "personalInfo", val :"I am a developer" },
    // college project
    { testId: "linkedIn", val :"some URl" },
    { testId: "testing", val :"none" },
    { testId: "likeToTesting", val :"yes I would" },
    // for level of languages
    { testId: "findUs", val :"online" },
    { testId: "lookingFor", val :"testing exp" },
    { testId: "techInterest", val :"some interest" },
  ];
  inputProps.forEach((node) =>{
    const inputNode = getByTestId(node.testId);
    fireEvent.change(inputNode, { target: { value: node.val } });
  });
  
  const errorMsgNode = getByText("please fill all the required* fields(min 4 characters each) to submit your application");


  // to check the email validation passes
  expect(errorMsgNode).toBeInTheDocument();

  
});

it("matches snapshot", () =>{
  const tree = renderer.create(<Apply></Apply>).toJSON();
  expect(tree).toMatchSnapshot();
});



