import React, { Component } from "react";
import EnterTodo from "./EnterTodo";
import TodoList from "./TodoList";
import { observer } from "mobx-react";

@observer
class TodoApp extends Component {
  onPressEnterKey = description => {
    this.props.todoStore.addTodo(description);
  };
  render() {
    return (
      <>
        <EnterTodo onPressEnterKey={this.onPressEnterKey} />
        <TodoList todoStore={this.props.todoStore} />
      </>
    );
  }
}
export default TodoApp;
