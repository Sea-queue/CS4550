import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs nav-pills nav-fill mt-2">
      <Link
        className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
        to="/Labs/a3"
      >
        JS/TS fundamentals
      </Link>
      <br />
      <Link
        className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}
        to="/Kanbas"
      >
        Student Portal
      </Link>
      <br />
      <Link
        className={`nav-link ${pathname.includes("Hello") ? "active" : ""}`}
        to="/Hello"
      >
        Greeting
      </Link>
    </nav>
  );
}

export default Navigation;
