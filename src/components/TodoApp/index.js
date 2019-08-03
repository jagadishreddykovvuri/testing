import React, { Component } from "react";
import EnterTodo from "./EnterTodo";
import TodoList from "./TodoList";
import { observer } from "mobx-react";
import TodoFooter from "./TodoFooter";

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
        <TodoFooter todoStore={this.props.todoStore} />
      </>
    );
  }
}
export default TodoApp;
