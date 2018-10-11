import TYPES from '../types/types';

// ACTIONS
const addTodo = (text, id) => ({
  type: TYPES.ADDED_TODO,
  payload: { text: text, id: id }
});
const toggleTodo = id => ({ type: TYPES.TOGGLED_TODO, payload: id });

export default { addTodo, toggleTodo };
