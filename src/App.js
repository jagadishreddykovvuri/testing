import React from "react";
import logo from "./logo.svg";
import "./App.css";
import todoStore from "./Stores/instances";
import TodoApp from "./components/TodoApp";
import Counter from "./Counter";

function App() {
  return <TodoApp todoStore={todoStore} />;
}

export default App;
