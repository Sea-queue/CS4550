import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav nav-tabs mt-2">
      <Link className="nav-link" to="/Labs/a3">
        Assigment 3
      </Link>
      <br />
      <Link className="nav-link" to="/Kanbas">
        Kanbas
      </Link>
    </nav>
  );
}

export default Navigation;
