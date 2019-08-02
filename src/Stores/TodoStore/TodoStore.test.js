import TodoStore from "./index";
import {
    filterValues
} from "../../constant.js";
describe("TodoStore ", () => {
    const todoStore = new TodoStore();
    it("should Add todo to todos", () => {
        expect(todoStore.todos.length).toBe(0);
        todoStore.addTodo("Learn TDD");
        expect(todoStore.todos.length).toBe(1);
        expect(todoStore.todos[0].todoDesc).toBe("Learn TDD");
    });
    it("should delete to do from todo list", () => {
        todoStore.deleteTodo(todoStore.todos[0]);
        expect(todoStore.todos.length).toBe(0);
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
        todoStore.addTodo("Learn TDD");
        todoStore.addTodo("Learn TDD1");
        todoStore.addTodo("Learn TDD2");
        todoStore.addTodo("Learn TDD3");
        todoStore.addTodo("Learn TDD4");
        todoStore.todos[1].taskStatus = true
        todoStore.todos[3].taskStatus = true
        todoStore.changeFilter(filterValues.all);
        expect(todoStore.filteredTodos).toBe(5)
        todoStore.changeFilter(filterValues.completed);
        expect(todoStore.filteredTodos).toBe(2)
        todoStore.changeFilter(filterValues.active);
        expect(todoStore.filteredTodos).toBe(3)
    })
});