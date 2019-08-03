import React from "react";
import TodoStore from "../../../Stores/TodoStore/index";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TodoFooter from "./index";
import { filterValues } from "../../../constant";
afterEach(cleanup);
describe("TodoFooter", () => {
  it("should call change filter function with all value in todostore on click all button ", () => {
    const todoStore = new TodoStore();
    jest.spyOn(todoStore, "changeFilter");
    const { getByTestId } = render(<TodoFooter todoStore={todoStore} />);
    const allButton = getByTestId("all");
    fireEvent.click(allButton);
    expect(todoStore.changeFilter).toBeCalledWith(filterValues.all);
  });
  it("should call change filter function with completed value in todostore on click completed button ", () => {
    const todoStore = new TodoStore();
    jest.spyOn(todoStore, "changeFilter");
    const { getByTestId } = render(<TodoFooter todoStore={todoStore} />);
    const completedButton = getByTestId("completed");
    fireEvent.click(completedButton);
    expect(todoStore.changeFilter).toBeCalledWith(filterValues.completed);
  });
});
