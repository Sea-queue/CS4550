import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation";
import Assignment3 from "./a3";
import Assignment4 from "./a4";

function Labs() {
  return (
    <div>
      <Navigation />
      {/* NOTE: watch out this: this A3 would not change when do actions in later A3  */}
      {/* <Assignment3 /> */}
      <Routes>
        <Route path="/a3/*" element={<Assignment3 />} />
        <Route path="/a4" element={<Assignment4 />} />
      </Routes>
    </div>
  );
}

export default Labs;
