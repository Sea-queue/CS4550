import {
  FaRegUserCircle,
  FaTachometerAlt,
  FaBook,
  FaNapster,
  FaTv,
  FaBrain,
  FaRegCalendarAlt,
  FaVideo,
} from "react-icons/fa";
import "./index.css";
import { Link, useLocation } from "react-router-dom";

function KanbasNavigation() {
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

  const { pathname } = useLocation();
  return (
    <ul className="kanbas-navigation sticky-top">
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "active" : ""}
        >
          <Link to={`/Kanbas/${link.label}`}>
            {link.icon} {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default KanbasNavigation;
