import React, { Component } from "react";
import EnterTodo from "./EnterTodo";
import todoStore from "../../Stores/instances";
class TodoApp extends Component {
  onPressEnterKey = description => {
    todoStore.addTodo(description);
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
