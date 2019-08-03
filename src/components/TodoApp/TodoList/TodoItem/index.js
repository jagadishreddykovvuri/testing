import React, { Component } from "react";
import EnterTodo from "../../EnterTodo/index";
import { observer } from "mobx-react";
@observer
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDoubleClicked: false
    };
  }
  onCheckHandle = () => {
    this.props.todo.toggleTaskStatus();
  };
  onDelete = () => {
    this.props.todoStore.deleteTodo(this.props.todo);
  };
  ondblClick = () => {
    this.setState({
      isDoubleClicked: true
    });
  };
  onPressEnterKey = e => {
    this.props.todo.updateTodoDescription(e);
    this.setState({
      isDoubleClicked: false
    });
  };
  onDescorEditable = () => {
    if (this.state.isDoubleClicked) {
      return <EnterTodo onPressEnterKey={this.onPressEnterKey} />;
    } else {
      return (
        <p data-testid="tododesc" onDoubleClick={this.ondblClick}>
          {this.props.todo.todoDesc}
        </p>
      );
    }
  };
  render() {
    return (
      <>
        <input
          type="checkbox"
          data-testid="checkbox"
          onClick={this.onCheckHandle}
        />
        {this.onDescorEditable()}
        <button data-testid="delete" onClick={this.onDelete}>
          X
        </button>
      </>
    );
  }
}
export default TodoItem;
