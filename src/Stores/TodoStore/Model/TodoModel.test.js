import TodoModel from "./TodoModel.js"
describe("TodoModel ", () => {
    let todoModel
    beforeEach(() => {
        todoModel = new TodoModel("jagadish")

    })
    it("should toggle the task Status", () => {
        todoModel.toggleTaskStatus()
        expect(todoModel.taskStatus).toBeTruthy()
        todoModel.toggleTaskStatus()
        expect(todoModel.taskStatus).toBeFalsy()
    })
    it("should Update todo description", () => {
        todoModel.updateTodoDescription("reddy")
        expect(todoModel.todoDesc).toBe("reddy")

    })

})