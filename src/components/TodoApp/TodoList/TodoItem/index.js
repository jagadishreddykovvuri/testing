import React, { Component } from "react";
class TodoItem extends Component {
  onCheckHandle = () => {
    this.props.todo.toggleTaskStatus();
  };
  onDelete = () => {
    this.props.todoStore.deleteTodo(this.props.todo);
  };
  render() {
    return (
      <>
        <input
          type="checkbox"
          data-testid="checkbox"
          onClick={this.onCheckHandle}
        />
        <button data-testid="delete" onClick={this.onDelete}>
          X
        </button>
      </>
    );
  }
}
export default TodoItem;
