import HelloRedux from "./HelloRedux";
import CounterRedux from "./ConterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./Todos/todoList";

const ReduxExamples = () => {
  return (
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList />
    </div>
  );
};

export default ReduxExamples;
