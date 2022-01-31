import React from "react";
import uuid from "uuid";

function TodoForm() {
  const [todo, setTodo] = userState ({
    id: "",
    task: "",
    completed: false
  });

function handleTaskInputChange(e) {
  setTodo({...todo, tasl: e.target.value});
}

function handleSubmit(e) {
  e.preventDefault();
  if(todo.task,trim()){
    addTodo({ ...todo, id: uuid.v4() });
    
    setTodo({...todo, task: ""});
  }
}

  return (
    <form>
    <input
    name="task"
    type="text"

    value={todo.task}
    onChange={handleTaskInputChange}
    />
    <button type="submit"> Submit </button>
    </form>
  );
}

export default TodoForm;
