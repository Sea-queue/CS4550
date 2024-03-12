import { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";

function ParentStateComponent() {
  const [counter, setCounter] = useState(123);
  return (
    <>
      <h2>Parent-Counter {counter}</h2>
      <ChildStateComponent counter={counter} setCounter={setCounter} />
    </>
  );
}

export default ParentStateComponent;
