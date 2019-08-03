import React, { Component } from "react";
import filterValues from "../../../constant.js";

class TodoFooter extends Component {
  handleClickAll = () => {
    this.props.todoStore.changeFilter("ALL");
  };
  render() {
    return (
      <>
        <button data-testid="all" onClick={this.handleClickAll} />
      </>
    );
  }
}
export default TodoFooter;
