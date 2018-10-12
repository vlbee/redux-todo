import { combineReducers } from 'redux';

import TYPES from '../types/types';

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADDED_TODO:
      return [
        ...state,
        { id: action.payload.id, text: action.payload.text, complete: false }
      ];
    case TYPES.TOGGLED_TODO:
      return state.map(
        todo =>
          todo.id === action.payload.id
            ? { ...todo, complete: !todo.complete }
            : todo
      );
    case TYPES.STARRED_TODO:
      return state.map(
        todo =>
          todo.id === action.payload.id ? { ...todo, star: !todo.star } : todo
      );
    case TYPES.DELETED_TODO:
      return state.filter(
        todo => (todo.id !== action.payload.id ? todo : null)
      );
    default:
      return state;
  }
};

// combineReducers fx needed to use state slices
const rootReducer = combineReducers({
  todoList: todoListReducer
});

export default rootReducer;
