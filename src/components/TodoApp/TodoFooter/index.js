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
  render() {
    return (
      <>
        <button data-testid="all" onClick={this.handleClickAll} />
        <button data-testid="completed" onClick={this.handleClickCompleted} />
        <button data-testid="active" onClick={this.handleClickActive} />
      </>
    );
  }
}
export default TodoFooter;
