import TodoStore from "./index";
import {
    filterValues
} from "../../constant.js";


describe("TodoStore ", () => {
    let todoStore
    beforeEach(() => {
        todoStore = new TodoStore();
        todoStore.addTodo("Learn TDD");
        todoStore.addTodo("Learn TDD1");
        todoStore.addTodo("Learn TDD2");
        todoStore.addTodo("Learn TDD3");
        todoStore.addTodo("Learn TDD4");
        todoStore.todos[1].taskStatus = true
        todoStore.todos[3].taskStatus = true
    });
    afterEach(() => {

    })
    it("should Add todo to todos", () => {
        expect(todoStore.todos.length).toBe(5);
        todoStore.addTodo("Learn TDD");
        expect(todoStore.todos.length).toBe(6);
        expect(todoStore.todos[0].todoDesc).toBe("Learn TDD");
    });
    it("should delete to do from todo list", () => {
        todoStore.deleteTodo(todoStore.todos[0]);
        expect(todoStore.todos.length).toBe(4);
    });
    it("should able to change filter", () => {
        todoStore.changeFilter(filterValues.all);
        expect(todoStore.todoFilter).toBe(filterValues.all);
        todoStore.changeFilter(filterValues.completed);
        expect(todoStore.todoFilter).toBe(filterValues.completed);
        todoStore.changeFilter(filterValues.active);
        expect(todoStore.todoFilter).toBe(filterValues.active);
    });

    it("should filter the todo list according to the filter value", () => {

        todoStore.changeFilter(filterValues.all);
        expect(todoStore.filteredTodos.length).toBe(5)
        todoStore.changeFilter(filterValues.completed);
        expect(todoStore.filteredTodos.length).toBe(2)
        todoStore.changeFilter(filterValues.active);
        expect(todoStore.filteredTodos.length).toBe(3)
    })
    it("should able to clear completed todos in todolist", () => {
        todoStore.clearCompleted()
        expect(todoStore.todos.length).toBe(3)
    })
});