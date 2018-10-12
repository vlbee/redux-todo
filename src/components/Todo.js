import React from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../actions/actions';
import SELECTORS from '../selectors/selectors';

const Todo = ({ todo, deleteTodo, starTodo, toggleTodo }) => {
  return (
    <div>
      <li
        style={{
          textDecoration: todo.complete ? 'line-through' : 'none',
          color: todo.star ? 'red' : 'black'
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </li>
      <span role="img" onClick={() => starTodo(todo.id)}>
        ⭐
      </span>
      <span role="img" onClick={() => deleteTodo(todo.id)}>
        🗑
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(ACTIONS.toggleTodo(id)),
  starTodo: id => dispatch(ACTIONS.starTodo(id))
});

// const selectTodo = (state, id) => state.filter(todo => todo.id === id)[0];
const mapStateToProps = (state, props) => ({
  todo: SELECTORS.selectTodo(state.todoList, props.id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
