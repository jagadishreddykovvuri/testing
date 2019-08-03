import React from "react";
import TodoStore from "../../../Stores/TodoStore/index";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TodoFooter from "./index";
import { filterValues } from "../../../constant";
afterEach(cleanup);
describe("TodoFooter", () => {
  let todoStore;
  beforeEach(() => {
    todoStore = new TodoStore();
    jest.spyOn(todoStore, "changeFilter");
  });
  it("should call change filter function with all value in todostore on click all button ", () => {
    const { getByTestId } = render(<TodoFooter todoStore={todoStore} />);
    const allButton = getByTestId("all");
    fireEvent.click(allButton);
    expect(todoStore.changeFilter).toBeCalledWith(filterValues.all);
  });
  it("should call change filter function with completed value in todostore on click completed button ", () => {
    const { getByTestId } = render(<TodoFooter todoStore={todoStore} />);

    const completedButton = getByTestId("completed");
    fireEvent.click(completedButton);
    expect(todoStore.changeFilter).toBeCalledWith(filterValues.completed);
  });
  it("should call change filter function with active value in todostore on click active button ", () => {
    const { getByTestId } = render(<TodoFooter todoStore={todoStore} />);
    const completedButton = getByTestId("active");
    fireEvent.click(completedButton);
    expect(todoStore.changeFilter).toBeCalledWith(filterValues.active);
  });
  it("should call the Clear completed function in todostoore when click on clea completed", () => {
    jest.spyOn(todoStore, "clearCompleted");
    const { getByTestId } = render(<TodoFooter todoStore={todoStore} />);
    const clearButton = getByTestId("clear");
    fireEvent.click(clearButton);
    expect(todoStore.clearCompleted).toBeCalled();
  });
});
