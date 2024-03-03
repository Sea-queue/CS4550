import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs nav-pills nav-fill mt-2">
      <Link
        className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
        to="/Labs/a3"
      >
        Assigment 3
      </Link>
      <br />
      <Link
        className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}
        to="/Labs/a4"
      >
        Assigment 4
      </Link>
      <br />
      <Link
        className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}
        to="/Kanbas"
      >
        Kanbas
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
