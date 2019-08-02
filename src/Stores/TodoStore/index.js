import {
    observable,
    action,
    computed
} from "mobx";
import {
    filterValues
} from "../../constant.js";
import TodoModel from "./Model/TodoModel.js"
class TodoStore {
    @observable todos
    @observable todoFilter
    constructor() {
        this.todos = []
    }
    @action.bound addTodo(description) {
        this.todos.push(new TodoModel(description))

    }
    @action.bound deleteTodo(todoObject) {
        this.todos.remove(todoObject);
    }
    @action.bound changeFilter(filterValue) {
        this.todoFilter = filterValue
    }
    @computed get filteredTodos() {
        let todos;
        if (this.todoFilter === filterValues.all) {
            todos = this.todos
        } else if (this.todoFilter === filterValues.completed) {
            todos = this.todos.filter(todo => todo.taskStatus === true)
        } else {
            todos = this.todos.filter(todo => todo.taskStatus === false)
        }
        return todos
    }

}
export default TodoStore