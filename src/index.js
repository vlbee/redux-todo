import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducers';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

let store = createStore(rootReducer, {
  todoList: [
    { id: 0, text: 'hello', completed: false },
    { id: 1, text: 'bye', completed: true }
  ]
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
