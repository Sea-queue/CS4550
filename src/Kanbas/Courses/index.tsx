import { courses } from "../../Kanbas/Database";
import { useParams, Navigate, Routes, Route } from "react-router";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

function Courses() {
  const { courseId = "RS101" } = useParams();
  console.log("checking:", courseId);
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <h2>
        <HiMiniBars3 /> Course {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        <CourseNavigation />
        <div className="overflow-y-scroll bottom-0 end-0">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
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
