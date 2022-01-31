import React, {useEffect, useState} from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoForm from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
const [todos, setTodos] = useState([]);

useEffect(() => {
  const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (storageTodos) {
    setTodos(storageTodos);
  }
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}, [todos]);

function addTodo(todo) {
  setTodos([todo, ...todos]);
}

function toggleComplete(id) {
  setTodo(
    todo.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
  );
}

function removeTodo(id) {
setTodo(todo.filter(todo => todo.id !== id));
}

  return (
    <div className="App">
      <header className="App-header">

      <p>TODO Mod3</p>
      <todoForm addTodo={addTodo} />
      <todoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      </header>
    </div>
  );
}

export default App;

//<p>
  //Edit <code>src/App.js</code> and save to reload.
//</p>
//<img src={logo} className="App-logo" alt="logo" />
//<a
//  className="App-link"
//  href="https://reactjs.org"
//  target="_blank"
//  rel="noopener noreferrer"
//>
//  Learn React
//</a>
