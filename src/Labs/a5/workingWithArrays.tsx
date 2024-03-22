import { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
    id: 1,
    title: "Node",
    description: "",
    due: "",
    completed: false,
  });

  const [isComplete, setIsComplete] = useState(false);

  const [todos, setTodos] = useState([
    {
      id: -1,
      title: "",
      description: "",
      due: "",
      completed: false,
    },
  ]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };

  const removeTodo = async (todo: any) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };

  const fetchTodoById = async (id: number) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a className="btn btn-primary" href={API} target="_blank">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <label>Todo id: </label>
      <input
        type="number"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <label>Todo's new Title: </label>
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
      <br />
      <input
        type="checkbox"
        onChange={() => {
          setTodo({
            ...todo,
            completed: !isComplete,
          });
          setIsComplete(!isComplete);
        }}
      />
      <label className="h4 mt-3">
        <a
          className="btn btn-primary ms-3"
          href={`${API}/${todo.id}/completed/${todo.completed}`}
          target="_blank"
        >
          Marking the selected todo id: {todo.id} as complete
        </a>
      </label>

      <h3>Update the todo description by their id</h3>
      <input
        type="text-area"
        placeholder="new todo description"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <label>
        <a
          className="btn btn-primary ms-3"
          href={`${API}/${todo.id}/description/${todo.description}`}
          target="_blank"
        >
          Update todo id: {todo.id} description
        </a>
      </label>

      <div>
        <button className="btn btn-warning" onClick={createTodo}>
          Create Todo
        </button>
        <button className="btn btn-warning ms-3" onClick={updateTitle}>
          Update Title
        </button>
        <ul className="list-group">
          {todos.map((t) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={t.id}
            >
              {t.title}
              <div>
                <button
                  className="btn btn-success me-3"
                  onClick={() => fetchTodoById(t.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeTodo(t)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WorkingWithArrays;
