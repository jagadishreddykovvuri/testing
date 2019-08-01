import TodoStore from "./index"
describe('TodoStore ', () => {
    const todoStore = new TodoStore();
    it('should Add todo to todos', () => {
        expect(todoStore.todos.length).toBe(0)
        todoStore.addTodo("Learn TDD")
        expect(todoStore.todos.length).toBe(1)
        expect(todoStore.todos[0].todoDesc).toBe("Learn TDD")
    });
    it("should delete to do from todo list", () => {
        todoStore.deleteTodo(todoStore.todos[0])
        expect(todoStore.todos.length).toBe(0)
    })
    it("should able to change filter", () => {
        todoStore.changeFilter("ALL")
        expect(todoStore.todoFilter).toBe("ALL")
        todoStore.changeFilter("COMPLETED")
        expect(todoStore.todoFilter).toBe("COMPLETED")
        todoStore.changeFilter("ACTIVE")
        expect(todoStore.todoFilter).toBe("ACTIVE")
    })

});