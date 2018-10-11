import { combineReducers } from 'redux';

import TYPES from '../types/types';

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADDED_TODO:
      return [
        ...state,
        { id: action.payload.id, text: action.payload.text, completed: false }
      ];
    case TYPES.TOGGLED_TODO:
      return state.map(
        todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
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
