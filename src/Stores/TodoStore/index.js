import {
    observable,
    action
} from "mobx"
class TodoStore {
    @observable todos
    constructor() {
        this.todos = []
    }
    @action.bound addTodo(description) {
        this.todos.push({
            todoName: description
        })

    }

}
export default TodoStore