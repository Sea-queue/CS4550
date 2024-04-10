import { Link } from "react-router-dom";
import {
  FaRegUserCircle,
  FaBrain,
  FaNapster,
  FaTv,
  FaTachometerAlt,
  FaBook,
  FaRegCalendarAlt,
  FaVideo,
  FaBars,
} from "react-icons/fa";

function Header() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "OpenAI", icon: <FaBrain className="fs-2" /> },
    { label: "Movies", icon: <FaTv className="fs-2" /> },
    { label: "Music", icon: <FaNapster className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Zoom", icon: <FaVideo className="fs-2" /> },
  ];

  const courses_links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <button
        className="btn btn-dark"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <FaBars />
      </button>
      <a className="navbar-brand" href="https://sea-queue.github.io/">
        Seaqueue
      </a>
      <div
        className="offcanvas offcanvas-top"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Seaqueue
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <ul className="navbar-nav mr-auto header ps-3 pe-3">
          {links.map((link, index) => (
            <Link
              className="shadow p-1 mb-1 bg-body-tertiary rounded"
              key={index}
              to={`/Kanbas/${link.label}`}
              style={{ textDecoration: "none" }}
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
