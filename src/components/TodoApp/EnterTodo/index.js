import React, { Component } from "react";
class EnterTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  onPressEnterKey = e => {
    if (e.keyCode === 13) {
      this.props.onPressEnterKey(e.target.value);
    }
  };
  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };
  render() {
    return (
      <>
        <input
          value={this.state.inputText}
          onChange={this.handleChange}
          type="text"
          placeholder="What needs to be Done?"
          onKeyDown={this.onPressEnterKey}
        />
      </>
    );
  }
}
export default EnterTodo;
