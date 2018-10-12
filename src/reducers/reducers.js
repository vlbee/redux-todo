// @ts-check

import { combineReducers } from 'redux';

import TYPES from '../types/types';

// you could replace state with todo variable name here
const todoReducer = (todo, action) => {
  console.log(todo, action);
  switch (action.type) {
    case TYPES.TOGGLED_TODO:
      return todo.id === action.payload.id
        ? { ...todo, complete: !todo.complete }
        : todo;
    case TYPES.STARRED_TODO:
      return todo.id === action.payload.id
        ? { ...todo, star: !todo.star }
        : todo;
    default:
      return todo;
  }
};

// you could replace state with todoList here
const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADDED_TODO:
      return [
        ...state,
        { id: action.payload.id, text: action.payload.text, complete: false }
      ];
    case TYPES.DELETED_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case TYPES.STARRED_TODO:
      return state.map(todo => todoReducer(todo, action));
    case TYPES.TOGGLED_TODO:
      return state.map(todo => todoReducer(todo, action));
    default:
      return state;
  }
};

// combineReducers fx needed to use state slices
const rootReducer = combineReducers({
  todoList: todoListReducer
});

export default rootReducer;
