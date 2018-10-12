const selectTodo = (state, id) => state.filter(todo => todo.id === id)[0];
const selectTodoList = state => state.todoList;

export default { selectTodo, selectTodoList };
