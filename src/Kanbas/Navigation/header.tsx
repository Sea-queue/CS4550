// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import KanbasNavigation from ".";
// import CourseNavigation from "../Courses/Navigation";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRegUserCircle,
  FaTachometerAlt,
  FaBook,
  FaRegCalendarAlt,
} from "react-icons/fa";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const kanbas_links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
  ];

  const courses_links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <button
        className="navbar-toggler float-left"
        type="button"
        data-toggle="collapse"
        data-target="#kanbasNavigation"
        aria-controls="kanbasNavigation"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="https://www.northeastern.edu/">
        NEU
      </a>

      {isNavCollapsed ? (
        ""
      ) : (
        <button
          className="navbar-toggler float-left"
          type="button"
          onClick={handleNavCollapse}
        >
          <i className={"fa fa-window-close"}></i>
        </button>
      )}

      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="kanbasNavigation"
      >
        <ul className="navbar-nav mr-auto header">
          {kanbas_links.map((link, index) => (
            <Link
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

  // Solution_2:
  //   const kanbas_links = [
  //     { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
  //     { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
  //     { label: "Courses", icon: <FaBook className="fs-2" /> },
  //     { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
  //   ];

  //   const courses_links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];

  //   return (
  //     <Navbar expand="lg" className="bg-body-tertiary">
  //       <Container>
  //         <Navbar.Toggle
  //           aria-controls="#kanbasNavigation"
  //           data-target="#kanbasNavigation"
  //         ></Navbar.Toggle>

  //         <Navbar.Brand href="https://www.northeastern.edu/">NEU</Navbar.Brand>

  //         <Navbar.Toggle
  //           aria-controls="#courseNavigation"
  //           data-target="#courseNavigation"
  //         >
  //           <i className="fa fa-solid fa-chevron-down"></i>
  //         </Navbar.Toggle>

  //         <Navbar.Collapse id="kanbasNavigation">
  //           <Nav>
  //             {kanbas_links.map((link, index) => (
  //               <Nav.Link>
  //                 <Link
  //                   to={`/Kanbas/${link.label}`}
  //                   style={{ textDecoration: "none" }}
  //                 >
  //                   {link.icon} {link.label}
  //                 </Link>
  //               </Nav.Link>
  //             ))}
  //           </Nav>
  //         </Navbar.Collapse>
  //         <Navbar.Collapse id="courseNavigation">
  //           <Nav>
  //             <Nav.Link>
  //               {courses_links.map((link, index) => (
  //                 <Link to={link}>{link}</Link>
  //               ))}
  //             </Nav.Link>
  //           </Nav>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  //   );
  // }
}

export default Header;
