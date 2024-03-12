import JavaScript from "./JavaScript";
import PathParameters from "./Routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./Todos/TodoList";
import { useSelector } from "react-redux";
import { LabState, TodoType } from "../store";
import TodoForm from "../a4/ReduxExamples/Todos/todoForm";
import TodoItem from "../a4/ReduxExamples/Todos/todoItem";

function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo: TodoType) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <TodoList />
      <Add a={3} b={4} />
      <Highlight>
        At the moment, there is a real risk that more and more countries end up
        in a lose-lose situation, which is no longer about who gains more, but
        only about who loses less.
      </Highlight>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <JavaScript />
    </div>
  );
}

export default Assignment3;
