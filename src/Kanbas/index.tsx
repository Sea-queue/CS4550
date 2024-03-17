import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../Navigation";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Header from "./Navigation/header";
import { useState } from "react";
import { courses_db } from "./Database";
import { Provider } from "react-redux";
import store from "./Store";

function Kanbas() {
  const [courses, setCourses] = useState(courses_db);
  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "reactapp.png",
  });
  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((db_course) => {
        if (db_course._id === course._id) {
          return course;
        } else {
          return db_course;
        }
      })
    );
  };
  return (
    <Provider store={store}>
      <Navigation />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }}>
          <div className="d-md-none d-block">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            {/* TODO: fix this route */}
            <Route path="Courses/*" element={<Courses courses={courses} />} />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;
