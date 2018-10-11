import { combineReducers } from 'redux';

import TYPES from '../types/types';

const todoListReducer = (state = [], action) => {
  // console.log(action);
  // console.log(state);
  switch (action.type) {
    case TYPES.ADDED_TODO:
      return [
        ...state,
        { id: action.payload.id, text: action.payload.text, completed: false }
      ];
    case TYPES.TOGGLED_TODO:
      // console.log('toggling');
      return state.map(
        todo =>
          //  ({ ...todo, completed: !todo.completed })
          // console.log('a', action.payload);
          // console.log(todo.id);
          // if (todo.id === action.payload.id) {
          //   console.log('match');
          //   return { ...todo, completed: !todo.completed };
          // } else {
          //   return todo;
          // }

          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
      );

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todoList: todoListReducer
});

export default rootReducer;
