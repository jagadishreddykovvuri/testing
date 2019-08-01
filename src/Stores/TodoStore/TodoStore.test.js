import TodoStore from "./index"
describe('TodoStore ', () => {
    it('should Add todo to todos', () => {
        const todoStore = new TodoStore();
        expect(todoStore.todos.length).toBe(0)
        todoStore.addTodo("Learn TDD")
        expect(todoStore.todos.length).toBe(1)
        expect(todoStore.todos[0].todoName).toBe("Learn TDD")
    });

});