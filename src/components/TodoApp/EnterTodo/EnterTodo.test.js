import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import EnterTodo from "./index";
afterEach(cleanup);

describe("Enter Todo", () => {
  it("should contain input box", () => {
    const { getByPlaceholderText } = render(<EnterTodo />);
    const inputbox = getByPlaceholderText("What needs to be Done?");
    expect(inputbox).toBeDefined();
  });
  it("should able to change text and on enter call onPressEnter function", () => {
    const onPressEnterKey = jest.fn();
    const { getByPlaceholderText } = render(
      <EnterTodo onPressEnterKey={onPressEnterKey} />
    );
    const inputBox = getByPlaceholderText("What needs to be Done?");
    const changeEvent = {
      target: {
        value: "jagadish"
      }
    };
    fireEvent.change(inputBox, changeEvent);
    fireEvent.keyPress(inputBox, { key: "Enter", keyCode: 13, code: 13 });
    expect(onPressEnterKey).toHaveBeenCalledTimes(1);
  });
});
