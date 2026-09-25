import { useState } from "react";
import Todo from "./Todo.js";
import NewTodoForm from "./NewTodoForm.js";

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(task) {
    setTodos(todos => [
      ...todos,
      {
        id: Date.now(),
        task
      }
    ]);
  }

  function removeTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h1>Todo List</h1>

      <NewTodoForm addTodo={addTodo} />

      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;