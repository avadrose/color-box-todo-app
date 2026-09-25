import { useState } from "react";

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  function handleChange(evt) {
    setTask(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    addTodo(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>

      <input
        id="task"
        value={task}
        onChange={handleChange}
      />

      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;