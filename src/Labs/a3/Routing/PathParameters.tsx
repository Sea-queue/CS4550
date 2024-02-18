import { Routes, Route, Link } from "react-router-dom";
import Add from "./Add";

function PathParameters() {
  return (
    <>
      <h2>Path Parameters</h2>
      <Link to="/Labs/a3/Add/1/2">1+2</Link> |{" "}
      <Link to="/Labs/a3/Add/3/4">3+4</Link>
      <Routes>
        <Route path="Add/:a/:b" element={<Add />} />
      </Routes>
    </>
  );
}

export default PathParameters;
