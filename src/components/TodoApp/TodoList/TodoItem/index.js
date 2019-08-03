import React, { Component } from "react";
import EnterTodo from "../../EnterTodo/index";
import { observer } from "mobx-react";
import { Div } from "../../TodoFooter/StyledComponents";
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
    if (window.confirm("you to want delete task ? ")) {
      this.props.todoStore.deleteTodo(this.props.todo);
    }
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
      return (
        <EnterTodo
          todoName={this.props.todo.todoDesc}
          onPressEnterKey={this.onPressEnterKey}
        />
      );
    } else {
      if (this.props.todo.taskStatus) {
        return (
          <strike data-testid="tododesc" onDoubleClick={this.ondblClick}>
            {this.props.todo.todoDesc}
          </strike>
        );
      } else {
        return (
          <p data-testid="tododesc" onDoubleClick={this.ondblClick}>
            {this.props.todo.todoDesc}
          </p>
        );
      }
    }
  };
  render() {
    return (
      <Div>
        <input
          type="checkbox"
          data-testid="checkbox"
          onChange={this.onCheckHandle}
          checked={this.props.todo.taskStatus}
        />
        {this.onDescorEditable()}
        <button data-testid="delete" onClick={this.onDelete}>
          X
        </button>
      </Div>
    );
  }
}
export default TodoItem;
