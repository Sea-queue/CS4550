import { useState } from "react";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(15);
  return (
    <>
      <h2>Encoding Parameters In URLs</h2>
      <h3>Calculator</h3>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
      />
      <h3>Path Parameters</h3>
      <button className="btn btn-primary me-3">
        <a
          className="text-white"
          href={`http://localhost:4000/a5/add/${a}/${b}`}
          target="_blank"
        >
          Add {a} + {b}
        </a>
      </button>
      <button className="btn btn-primary me-3">
        <a
          className="text-white"
          href={`http://localhost:4000/a5/subtract/${a}/${b}`}
          target="_blank"
        >
          Subtract {a} - {b}
        </a>
      </button>

      <button className="btn btn-primary me-3">
        <a
          className="text-white"
          href={`http://localhost:4000/a5/multiply/${a}/${b}`}
          target="_blank"
        >
          Multiply {a} * {b}
        </a>
      </button>

      <button className="btn btn-primary">
        <a
          className="text-white"
          href={`http://localhost:4000/a5/divide/${a}/${b}`}
          target="_blank"
        >
          Divide {a} * {b}
        </a>
      </button>

      <h3>Query Parameters</h3>
      <a
        className="btn btn-primary me-3"
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}
        target="_blank"
      >
        Add {a} + {b}
      </a>
      <a
        className="btn btn-danger me-3"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}
        target="_blank"
      >
        Subtract {a} - {b}
      </a>
      <a
        className="btn btn-primary me-3"
        href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}
        target="_blank"
      >
        Multiply {a} * {b}
      </a>
      <a
        className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}
        target="_blank"
      >
        Divide {a} / {b}
      </a>
    </>
  );
}

export default EncodingParametersInURLs;
