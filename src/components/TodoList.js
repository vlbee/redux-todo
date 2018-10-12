import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../actions/actions';
import SELECTORS from '../selectors/selectors';
import Todo from './Todo';

let todoID = 2;
class TodoList extends Component {
  render() {
    return (
      <section>
        <div>
          <input
            ref={node => {
              this.input = node;
            }}
          />
          <button
            onClick={() => {
              this.props.addTodo(this.input.value, todoID++);
              this.input.value = '';
            }}
          >
            Add Todo
          </button>
        </div>
        <ul>
          {this.props.todoList.map(({ id }, i) => (
            <Todo key={i} id={id} deleteTodo={this.props.deleteTodo} />
          ))}
        </ul>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: (text, id) => dispatch(ACTIONS.addTodo(text, id)),
  deleteTodo: id => dispatch(ACTIONS.deleteTodo(id))
});

// const selectTodoList = state => state.todoList;
const mapStateToProps = state => ({
  todoList: SELECTORS.selectTodoList(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
