import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../actions/actions';
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
              console.log(this.input.value);
              this.props.addTodo(this.input.value, todoID++);
              this.input.value = '';
            }}
          >
            Add Todo
          </button>
        </div>
        <ul>
          {this.props.todoList.map(todo => (
            <Todo
              todo={todo}
              toggleTodo={this.props.toggleTodo}
              starTodo={this.props.starTodo}
              deleteTodo={this.props.deleteTodo}
            />
          ))}
        </ul>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: (text, id) => dispatch(ACTIONS.addTodo(text, id)),
  toggleTodo: id => dispatch(ACTIONS.toggleTodo(id)),
  starTodo: id => dispatch(ACTIONS.starTodo(id)),
  deleteTodo: id => dispatch(ACTIONS.deleteTodo(id))
});

const mapStateToProps = state => ({
  todoList: state.todoList
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
