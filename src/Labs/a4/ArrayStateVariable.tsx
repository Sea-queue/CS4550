import { useState } from "react";

function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <>
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-primary mb-2">
        Add Element
      </button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item} --
            <button
              onClick={() => deleteElement(index)}
              className="btn btn-danger mb-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ArrayStateVariable;
