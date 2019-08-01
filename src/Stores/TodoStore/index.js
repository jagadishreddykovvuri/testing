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


}
export default TodoStore