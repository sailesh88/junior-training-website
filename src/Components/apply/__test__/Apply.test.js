import React from "react";
import ReactDOM from "react-dom";
import Apply from "../Apply";

import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

const inputProps = [
  { testId: "email", val: "testing@gmail.com" },
  { testId: "name", val: "Sailesh" },
  { testId: "college", val: "collegeName" },
  { testId: "course", val: "MS" },
  { testId: "branch", val: "EEE" },
  // { testId: "year", val : new Date() },
  { testId: "personalInfo", val: "I am a developer" },
  // college project
  { testId: "linkedIn", val: "some URl" },
  { testId: "testing", val: "none" },
  { testId: "likeToTesting", val: "yes I would" },
  // for level of languages
  { testId: "programmingLang", val: "JAVA etc." },
  { testId: "findUs", val: "online" },
  { testId: "lookingFor", val: "testing exp" },
  { testId: "techInterest", val: "some interest" },
];

const checkboxProps = [
  { text: "is fully remote", testId: "check1" },
  { text: "is not for everyone", testId: "check2" },
  { text: "is fast paced", testId: "check3" },
  { text: "has no placement guarantee", testId: "check4" },
  { text: "has no refund policy", testId: "check5" },
];

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Apply></Apply>, div);
});

it("renders apply correctly", () => {
  const { getByTestId } = render(<Apply></Apply>);
  expect(getByTestId("apply"));
});

it("Apply component should have name with the id of Name", () => {
  const { getByTestId } = render(<Apply />);
  const inputNameNode = getByTestId("name");
  expect(inputNameNode.id).toBe("Name");
});

it("Apply component should have email", () => {
  const { getByTestId } = render(<Apply />);
  const inputEmailNode = getByTestId("email");

  expect(inputEmailNode).toBeInTheDocument();
});

/*it("Email input should accept text", () => {
  const { getByTestId, getByText } = render(<Apply />);
  const inputEmailNode = getByTestId("email");

  expect(inputEmailNode.value).toMatch("");

  fireEvent.change(inputEmailNode, { target: { value: "testing" } });

  expect(inputEmailNode.value).toMatch("testing");

  const errorMsgNode = getByText("Email not valid");

  // to check the email validation fails
  expect(errorMsgNode).toBeInTheDocument();

  fireEvent.change(inputEmailNode, { target: { value: "testing@domain.com" } });

  // to check the email validation passes
  expect(errorMsgNode).not.toBeInTheDocument();
});*/

it("Should be able to submit the form", () => {
  const mockFn = jest.fn();
  const { getByRole } = render(<Apply handleSubmit={mockFn} />);
  const buttonNode = getByRole("button");
  fireEvent.submit(buttonNode);

  expect(mockFn).toHaveBeenCalledTimes(0);
});

it("Test", async () => {
  const mockFn = jest.fn();
  const { getByTestId, getByText, getByLabelText, getAllByTestId, getByRole } =
    render(<Apply onSubmit={mockFn} />);

  const errorMsgNode = getByText(
    "please fill all the required* fields(min 4 characters each) to submit your application"
  );

  inputProps.forEach((node) => {
    const inputNode = getByTestId(node.testId);
    fireEvent.change(inputNode, { target: { value: node.val } });
  });

  // to check the email validation passes
  expect(errorMsgNode).toBeInTheDocument();

  checkboxProps.forEach((node) => {
    const inputNode = getByText(node.text);
    fireEvent.click(inputNode);
    expect(getByTestId(node.testId).querySelector("input").checked).toBe(true);
  });

  const radio = getByLabelText("Yes");
  const radioSecond = getByLabelText("No");
  fireEvent.click(radioSecond);
  // check if false
  expect(radioSecond).toHaveProperty("checked", true);

  //The value should be the key of the option
  fireEvent.change(getByTestId("select"), { target: { value: "beginner" } });
  let options = getAllByTestId("select-option");
  expect(options[0].selected).toBeTruthy();
  expect(options[1].selected).toBeFalsy();
  expect(options[2].selected).toBeFalsy();

  // to check the email validation passes
  expect(errorMsgNode).not.toBeInTheDocument();

  const buttonNode = getByTestId("submit");
  fireEvent.submit(buttonNode);

  console.log(fireEvent.submit(buttonNode));

  // expect(mockFn).toHaveBeenCalled();
  // expect(mockFn).toHaveBeenCalledTimes(1);
});

it("Apply.js matches snapshot", () => {
  const tree = renderer.create(<Apply />).toJSON();
  expect(tree).toMatchSnapshot();
});