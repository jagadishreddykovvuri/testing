import TodoModel from "./TodoModel.js"
describe("TodoModel ", () => {
    it("should toggle the task Status", () => {
        const todoModel = new TodoModel("jagadish")
        todoModel.toggleTaskStatus()
        expect(todoModel.taskStatus).toBeTruthy()
        todoModel.toggleTaskStatus()
        expect(todoModel.taskStatus).toBeFalsy()
    })

})