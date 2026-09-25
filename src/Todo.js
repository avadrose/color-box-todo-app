function Todo({ id, task, removeTodo }) {
  return (
    <div data-testid="todo">
      <span>{task}</span>

      <button onClick={() => removeTodo(id)}>
        X
      </button>
    </div>
  );
}

export default Todo;