import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_A6;

function WorkingWithArrays() {
  const API = `${API_BASE}/a5/todos`;
  const [todo, setTodo] = useState({
    id: 1,
    title: "Node",
    description: "Learn Node, It is very Important",
    due: "2059-09-12",
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

  const [errorMessage, setErrorMessage] = useState(null);

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

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (target: any) => {
    try {
      const response = await axios.delete(`${API}/${target.id}`);
      setTodos(todos.filter((t) => t.id !== target.id));
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
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

      <br />
      <hr />

      <button className="btn btn-warning" onClick={createTodo}>
        Create Todo
      </button>
      <button className="btn btn-warning ms-3" onClick={updateTitle}>
        Update Title
      </button>
      <br />
      <hr />

      <div className="d-flex mb-2">
        <textarea
          value={todo.description}
          onChange={(e) => {
            setTodo({ ...todo, description: e.target.value });
          }}
        />

        <input
          value={todo.due}
          type="date"
          onChange={(e) => {
            setTodo({ ...todo, due: e.target.value });
          }}
        />

        <label className="ms-3 me-3">
          <input
            checked={todo.completed}
            type="checkbox"
            onChange={(e) =>
              setTodo({
                ...todo,
                completed: e.target.checked,
              })
            }
          />
          Completed
        </label>
        <button className="btn btn-primary" onClick={postTodo}>
          Post Todo
        </button>
        <button className="btn btn-warning ms-2" onClick={updateTodo}>
          Update Todo
        </button>
      </div>

      <div>
        {errorMessage && (
          <div className="alert alert-danger mb-2 mt-2"> {errorMessage}</div>
        )}
        <ul className="list-group">
          {todos.map((t) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={t.id}
            >
              <div>
                <input
                  className="me-2"
                  checked={t.completed}
                  type="checkbox"
                  readOnly
                />
                {t.title}
              </div>

              <p>{t.description}</p>
              <p>{t.due}</p>

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
                <button
                  className="btn btn-danger ms-2"
                  onClick={() => deleteTodo(t)}
                >
                  Delete
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
