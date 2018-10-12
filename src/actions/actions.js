import TYPES from '../types/types';

// ACTIONS
const addTodo = (text, id) => ({
  type: TYPES.ADDED_TODO,
  payload: { text: text, id: id }
});

const deleteTodo = id => ({ type: TYPES.DELETED_TODO, payload: { id: id } });
const toggleTodo = id => ({ type: TYPES.TOGGLED_TODO, payload: { id: id } });
const starTodo = id => ({ type: TYPES.STARRED_TODO, payload: { id: id } });

export default { addTodo, toggleTodo, deleteTodo, starTodo };
