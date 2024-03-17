import Navigation from "../Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Flow from "./nn_chart";

function AI() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="Flow" />} />
        <Route path="Flow" element={<Flow />} />
      </Routes>
    </>
  );
}

export default AI;
