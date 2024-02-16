import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav nav-tabs mt-2 justify-content-center">
      <Link className="nav-link" to="/Labs/a3">
        TypeScript Fundamentals
      </Link>
      <br />
      <Link className="nav-link" to="/Kanbas">
        Student Portal
      </Link>
    </nav>
  );
}

export default Navigation;
