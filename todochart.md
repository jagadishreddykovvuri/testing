components
_ [] TodoApp
_ [] EnterTodo
_ [] TodoList
_ [] TodoItem
_ [] TodoFooter
Stores
_ [] TodoStore
_ [x] addtoTodo
_ [x] filterTodos
_ [x] clearCompleted
_ [x] activeItemLeft
_ [x] changeFilter
_ [x] deleteTodo
\_

[] TodoModel
\_ [] updateTodo  
 [] toggleTodoStatus
it("should return count for number of tasks active",()=>{
expect(todoStore.undoneLeft).toBe(3)
})
@computed get undoneLeft(){
return this.todos.filter(todo=> todo.taskStatus===false).length
}
