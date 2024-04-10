import { Routes, Route, Navigate } from "react-router";
import NapsterSearch from "./search";

export default function () {
  return (
    <div className="container-fluid">
      <h1>Napster Music</h1>
      <Routes>
        <Route path="/" element={<Navigate to="Search" />} />
        <Route path="Search" element={<NapsterSearch />} />
      </Routes>
    </div>
  );
}
