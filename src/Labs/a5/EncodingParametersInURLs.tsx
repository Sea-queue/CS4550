import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(15);
  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    // const response = await axios.get(`http://localhost:4000/a5/welcome`);
    const response = await axios.get(`${API_BASE}/a5/welcome`);
    setWelcome(response.data);
  };

  const [result, setResult] = useState(0);
  const fetchSum = async (a: number, b: number) => {
    // const response = await axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    const response = await axios.get(`${API_BASE}/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a: number, b: number) => {
    const response = await axios.get(
      // `http://localhost:4000/a5/subtract/${a}/${b}`
      `${API_BASE}/a5/subtract/${a}/${b}`
    );
    setResult(response.data);
  };

  useEffect(() => {
    fetchWelcome();
  }, []);

  return (
    <>
      <h2>Encoding Parameters In URLs</h2>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>
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

      <input value={result} type="number" readOnly />
      <h3>Fetch Result</h3>
      <button className="btn btn-warning me-3" onClick={() => fetchSum(a, b)}>
        Fetch Sum of {a} + {b}
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => fetchSubtraction(a, b)}
      >
        Fetch Subtraction of {a} - {b}
      </button>

      <h3>Path Parameters</h3>
      <button className="btn btn-primary me-3">
        <a
          className="text-white"
          href={`${API_BASE}/a5/add/${a}/${b}`}
          target="_blank"
        >
          Add {a} + {b}
        </a>
      </button>
      <button className="btn btn-primary me-3">
        <a
          className="text-white"
          href={`${API_BASE}/a5/subtract/${a}/${b}`}
          target="_blank"
        >
          Subtract {a} - {b}
        </a>
      </button>

      <button className="btn btn-primary me-3">
        <a
          className="text-white"
          href={`${API_BASE}/a5/multiply/${a}/${b}`}
          target="_blank"
        >
          Multiply {a} * {b}
        </a>
      </button>

      <button className="btn btn-primary">
        <a
          className="text-white"
          href={`${API_BASE}/a5/divide/${a}/${b}`}
          target="_blank"
        >
          Divide {a} * {b}
        </a>
      </button>

      <h3>Query Parameters</h3>
      <a
        className="btn btn-primary me-3"
        href={`${API_BASE}/a5/calculator?operation=add&a=${a}&b=${b}`}
        target="_blank"
      >
        Add {a} + {b}
      </a>
      <a
        className="btn btn-danger me-3"
        href={`${API_BASE}/a5/calculator?operation=subtract&a=${a}&b=${b}`}
        target="_blank"
      >
        Subtract {a} - {b}
      </a>
      <a
        className="btn btn-primary me-3"
        href={`${API_BASE}/a5/calculator?operation=multiply&a=${a}&b=${b}`}
        target="_blank"
      >
        Multiply {a} * {b}
      </a>
      <a
        className="btn btn-primary"
        href={`${API_BASE}/a5/calculator?operation=divide&a=${a}&b=${b}`}
        target="_blank"
      >
        Divide {a} / {b}
      </a>
    </>
  );
}

export default EncodingParametersInURLs;
