import { useState } from "react";
import { LabState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./addReducer";

function AddRedux() {
  const [c, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum } = useSelector((state: LabState) => state.addReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Add Redux</h1>
      <h2>
        {c} + {b} = {sum}
      </h2>
      <input
        type="number"
        value={c}
        onChange={(e) => setA(parseInt(e.target.value))}
        className="form-control"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
        className="form-control"
      />
      <button
        onClick={() => dispatch(add({ c, b }))}
        className="btn btn-primary"
      >
        Add Redux
      </button>
    </>
  );
}

export default AddRedux;
