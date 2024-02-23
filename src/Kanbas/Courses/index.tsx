import { courses } from "../../Kanbas/Database";
import { useParams, Navigate, Routes, Route } from "react-router";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <h1>
        <HiMiniBars3 /> Course {course?.name}
      </h1>
      <CourseNavigation />
      <div
        className="overflow-y-scroll position-fixed bottom-0 end-0"
        style={{ left: "520px", top: "50px" }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<h1>Home</h1>} />
          <Route path="Modules" element={<h1>Modules</h1>} />
          <Route path="Piazza" element={<h1>Piazza</h1>} />
          <Route path="Grades" element={<h1>Grades</h1>} />
          <Route path="Assignments" element={<h1>Assignments</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default Courses;
