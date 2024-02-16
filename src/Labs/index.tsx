import Assignment3 from "./a3";
import { Routes, Route } from "react-router-dom";

function Labs() {
  return (
    <div>
      <Routes>
        <Route path="/a3" element={<Assignment3 />} />
      </Routes>
    </div>
  );
}

export default Labs;
