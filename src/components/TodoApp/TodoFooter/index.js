import React, { Component } from "react";
import { filterValues } from "../../../constant.js";

class TodoFooter extends Component {
  handleClickAll = () => {
    this.props.todoStore.changeFilter(filterValues.all);
  };
  handleClickCompleted = () => {
    this.props.todoStore.changeFilter(filterValues.completed);
  };
  handleClickActive = () => {
    this.props.todoStore.changeFilter(filterValues.active);
  };
  handleClear = () => {
    this.props.todoStore.clearCompleted();
  };
  render() {
    return (
      <>
        <button data-testid="all" onClick={this.handleClickAll}>
          ALL
        </button>
        <button data-testid="completed" onClick={this.handleClickCompleted}>
          COMPLETED
        </button>
        <button data-testid="active" onClick={this.handleClickActive}>
          ACTIVE
        </button>
        <a data-testid="clear" onClick={this.handleClear}>
          clearCompleted
        </a>
      </>
    );
  }
}
export default TodoFooter;
