import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../Navigation";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Header from "./Navigation/header";

function Kanbas() {
  return (
    <>
      <Navigation />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }}>
          <div className="d-md-none d-block">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/*" element={<Courses />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Kanbas;
