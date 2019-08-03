import React, { Component } from "react";
import { filterValues } from "../../../constant.js";

class TodoFooter extends Component {
  handleClickAll = () => {
    this.props.todoStore.changeFilter(filterValues.all);
  };
  handleClickCompleted = () => {
    this.props.todoStore.changeFilter(filterValues.completed);
  };
  render() {
    return (
      <>
        <button data-testid="all" onClick={this.handleClickAll} />
        <button data-testid="completed" onClick={this.handleClickCompleted} />
      </>
    );
  }
}
export default TodoFooter;
