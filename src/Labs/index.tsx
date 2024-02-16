import Assignment3 from "./a3";
import { Routes, Route } from "react-router-dom";

function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <Routes>
        <Route path="/a3" element={<Assignment3 />} />
      </Routes>
    </div>
  );
}

export default Labs;
