import React, { Component } from "react";
import EnterTodo from "./EnterTodo";
class TodoApp extends Component {
  onPressEnterKey = description => {
    this.props.todoStore.addTodo(description);
  };
  render() {
    return (
      <>
        <EnterTodo onPressEnterKey={this.onPressEnterKey} />
      </>
    );
  }
}
export default TodoApp;
