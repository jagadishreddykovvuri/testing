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
        <EnterTodo onPressEnterKey={this.onPressEnterKey} todoName="" />
        <TodoList todoStore={this.props.todoStore} />
        {this.props.todoStore.todos.length > 0 && (
          <TodoFooter todoStore={this.props.todoStore} />
        )}
      </>
    );
  }
}
export default TodoApp;
