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
        todoStore.deleteTodo("Learn TDD")
        expect(todoStore.todos.length).toBe(0)
    })

});