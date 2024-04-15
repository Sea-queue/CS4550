// import { courses_db } from "../../Kanbas/Database";
import { useParams, Navigate, Routes, Route } from "react-router";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { useState, useEffect } from "react";
import axios from "axios";

// function Courses({ courses }: { courses: any[] }) {
function Courses() {
  const { courseId = "RS101" } = useParams();
  // const course = courses_db.find((course) => course._id === courseId);
  // const course = courses.find((course) => course._id === courseId);
  const COURSES_API = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState<any>({ id: "" });
  const findCourseById = async (courseId?: string) => {
    try {
      const response = await axios.get(`${COURSES_API}/${courseId}`);
      setCourse(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
      <h2>
        <HiMiniBars3 /> Course {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="overflow-y-scroll bottom-0 end-0 flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to={`${courseId}/Home`} />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="Assignments" element={<Assignments />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
