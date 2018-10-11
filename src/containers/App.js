import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/styles.css';
import ACTIONS from '../actions/actions';

let todoID = 2;

// const TodoList = ({ list }) => (
//   <ul>
//     {list.map(todo => (
//       <li key={todo.id} onClick={() => this.props.toggleTodo(todo.id)}>
//         {todo.text}
//       </li>
//     ))}
//   </ul>
// );

class App extends Component {
  render() {
    return (
      <div className="App">
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
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
              onClick={() => this.props.toggleTodo(todo.id)}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        {/* <TodoList list={this.props.todoList} /> */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: (text, id) => dispatch(ACTIONS.addTodo(text, id)),
  toggleTodo: id => dispatch(ACTIONS.toggleTodo(id))
});

const mapStateToProps = state => ({
  todoList: state.todoList
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
