import TodoStore from "../index"
describe("TodoStore ", () => {
    let todoStore
    beforeEach(() => {
        todoStore = new TodoStore();
        todoStore.addTodo("Learn TDD");
        todoStore.addTodo("Learn TDD1");
        todoStore.addTodo("Learn TDD2");
        todoStore.addTodo("Learn TDD3");
        todoStore.addTodo("Learn TDD4");
    });
    it("should toggle todo status", () => {
        todoStore.todos[2].toggleTaskStatus()
        expect(todoStore.todos[2].taskStatus).toBeTruthy()
        todoStore.todos[2].toggleTaskStatus()
        expect(todoStore.todos[2].taskStatus).toBeFalsy()
    })
    it("should update todo description", () => {
        todoStore.todos[3].updateTodoDescription("learn mobx")
        expect(todoStore.todos[3]).toBe("learn mobx")
    })
})