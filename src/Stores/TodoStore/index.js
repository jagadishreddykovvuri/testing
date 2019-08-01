import {
    observable,
    action
} from "mobx";
import TodoModel from "./Model/TodoModel.js"
class TodoStore {
    @observable todos
    constructor() {
        this.todos = []
    }
    @action.bound addTodo(description) {
        this.todos.push(new TodoModel(description))

    }
    @action.bound deleteTodo(description) {
        this.todos = this.todos.filter(todo => todo.todoDesc != description)
    }

}
export default TodoStore