import React, { Component } from "react";
import TodoItem from "./TodoItem/index";
import { observer } from "mobx-react";
@observer
class TodoList extends Component {
  render() {
    let id = 0;
    return (
      <>
        {this.props.todoStore.filteredTodos.map(todo => {
          id = id + 1;
          return (
            <TodoItem key={id} todo={todo} todoStore={this.props.todoStore} />
          );
        })}
      </>
    );
  }
}
export default TodoList;
