import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../Navigation";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import Header from "./Navigation/header";
import { useState, useEffect } from "react";
// import { courses_db } from "./Database";
import { Provider } from "react-redux";
import store from "./Store";
import axios from "axios";
import OpenAI from "../OpenAI";
import Napster from "../Napster";

//we would like the URL to point to the local Node server when developing locally, and use the remote server when deployed remotely without having to change the URLs manually ourselves.
const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "reactapp.png",
  });

  // const COURSES_API = "http://localhost:4000/api/courses";
  // const COURSES_API = "https://kanbas-server-2huo.onrender.com/api/courses";
  const COURSES_API = `${API_BASE}/api/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };

  // const addNewCourse = () => {
  //   const newCourse = { ...course, _id: new Date().getTime().toString() };
  //   setCourses([...courses, { ...course, ...newCourse }]);
  // };

  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, course);
    setCourses([...courses, response.data]);
  };

  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}`);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((db_course) => {
  //       if (db_course._id === course._id) {
  //         return course;
  //       } else {
  //         return db_course;
  //       }
  //     })
  //   );
  // };

  const updateCourse = async () => {
    const response = await axios.put(`${COURSES_API}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
  };

  useEffect(() => {
    findAllCourses();
  }, []);

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
            <Route path="Account/*" element={<Account />} />
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
            {/* <Route path="Courses/*" element={<Courses courses={courses} />} /> */}
            <Route path="Courses/*" element={<Courses />} />
            <Route
              path="Courses/:courseId/*"
              // element={<Courses courses={courses} />}
              element={<Courses />}
            />
            <Route path="/OpenAI/*" element={<OpenAI />} />
            <Route path="Music/*" element={<Napster />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;
