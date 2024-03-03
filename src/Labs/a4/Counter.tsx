import React, { useState } from "react";

function Counter() {
  // let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);

  return (
    <>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          // count++;
          // console.log(count);
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
          // count--;
          // console.log(count);
        }}
      >
        Down
      </button>
    </>
  );
}

export default Counter;
