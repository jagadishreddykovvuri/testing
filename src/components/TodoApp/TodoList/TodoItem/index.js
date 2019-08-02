import React, { Component } from "react";
class TodoItem extends Component {
  onCheckHandle = () => {
    this.props.todoModel.toggleTaskStatus();
  };
  render() {
    return (
      <>
        <input
          type="checkbox"
          data-testid="checkbox"
          onClick={this.onCheckHandle}
        />
      </>
    );
  }
}
export default TodoItem;
