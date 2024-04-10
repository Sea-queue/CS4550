import { Link, useLocation } from "react-router-dom";
import { Background } from "reactflow";

function Navigation() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs nav-pills nav-fill mt-2 mb-2 border-1">
      <Link
        className={`nav-link ${
          pathname.includes("a3") ? "active" : ""
        } border-warning`}
        style={{
          color: `${pathname.includes("a3") ? "gold" : "black"}`,
          background: `${pathname.includes("a3") ? "rgb(2, 82, 43)" : ""}`,
        }}
        to="/Labs/a3"
      >
        JS/TS Fundamentals
      </Link>
      <br />
      <Link
        className={`nav-link ${
          pathname.includes("a4") ? "active" : ""
        } border-warning`}
        style={{
          color: `${pathname.includes("a4") ? "gold" : "black"}`,
          background: `${pathname.includes("a4") ? "rgb(2, 82, 43)" : ""}`,
        }}
        to="/Labs/a4"
      >
        React Fundamentals
      </Link>
      <br />

      {/* <Link
        className={`nav-link ${pathname.includes("a5") ? "active" : ""}`}
        to="/Labs/a5"
      >
        Assigment 5
      </Link>
      <br /> */}

      <Link
        className={`nav-link ${
          pathname.includes("Kanbas") ? "active" : ""
        } border-warning`}
        style={{
          color: `${pathname.includes("Kanbas") ? "gold" : "black"}`,
          background: `${pathname.includes("Kanbas") ? "rgb(2, 82, 43)" : ""}`,
        }}
        to="/Kanbas"
      >
        Student Portal
      </Link>
      <br />
      <Link
        className={`nav-link ${
          pathname.includes("ArtificalInteligence") ? "active" : ""
        } border-warning`}
        style={{
          color: `${
            pathname.includes("ArtificalInteligence") ? "gold" : "black"
          }`,
          background: `${
            pathname.includes("ArtificalInteligence") ? "rgb(2, 82, 43)" : ""
          }`,
        }}
        to="/ArtificalInteligence"
      >
        Neural Network
      </Link>
    </nav>
  );
}

export default Navigation;
