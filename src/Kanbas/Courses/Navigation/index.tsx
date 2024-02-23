import { Link, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
  const { pathname } = useLocation();

  return (
    <ul className="course-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CourseNavigation;
