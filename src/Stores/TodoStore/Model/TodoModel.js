import {
    observable,
    action
} from "mobx"
class TodoModel {
    id
    @observable todoDesc
    @observable taskStatus
    constructor(description) {
        this.id = Date.now()
        this.todoDesc = description
        this.taskStatus = false
    }
    @action.bound toggleTaskStatus() {
        this.taskStatus = !this.taskStatus
    }

}
export default TodoModel