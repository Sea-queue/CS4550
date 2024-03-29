import {
  FaRegUserCircle,
  FaTachometerAlt,
  FaBook,
  FaRegCalendarAlt,
  FaVideo,
  FaHandshake,
  FaInbox,
  FaDesktop,
} from "react-icons/fa";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Zoom", icon: <FaVideo className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    { label: "Studio", icon: <FaDesktop className="fs-2" /> },
    { label: "Help", icon: <FaHandshake className="fs-2" /> },
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
