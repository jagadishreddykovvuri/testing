describe("TodoModel ", () => {
    it("should toggle the task Status", () => {
        const todoModel = new todoModel()
        todoModel.toggleTaskStatus()
        expect(todoModel.taskStatus).toBeTruthy()
        todoModel.toggleTaskStatus()
        expect(todoModel.taskStatus).toBeFalsy()
    })

})