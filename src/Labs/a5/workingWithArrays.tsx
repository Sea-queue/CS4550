import { useState } from "react";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
    id: 1,
    title: "Node",
    description: "",
    due: "",
    completed: false,
  });
  return (
    <div>
      <h3>Working with arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a className="btn btn-primary" href={API} target="_blank">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        type="number"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <input
        type="text"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <h3>Updating an Item in an Array</h3>
      <a
        className="btn btn-primary"
        href={`${API}/${todo.id}/title/${todo.title}`}
        target="_blank"
      >
        Update Title to {todo.title}
      </a>
      <a
        className="btn btn-primary ms-3"
        href={`${API}/${todo.id}`}
        target="_blank"
      >
        Get todo by ID
      </a>

      <h3>Filtering Array Items</h3>
      <a
        className="btn btn-primary"
        href={`${API}?completed=true`}
        target="_blank"
      >
        Get Completed Todos
      </a>

      <h3>Creating new Items in an Array</h3>
      <a className="btn btn-primary" href={`${API}/create`} target="_blank">
        Create Todo
      </a>

      <h3>Deleting From an Array</h3>
      <a
        className="btn btn-primary"
        href={`${API}/${todo.id}/delete`}
        target="_blank"
      >
        Delete Todo with id = {todo.id}
      </a>
    </div>
  );
}

export default WorkingWithArrays;
