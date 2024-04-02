import { Link } from "react-router-dom";
// import { courses_db } from "../Database";
import { useState } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  // const [courses, setCourses] = useState(courses_db);
  // const [course, setCourse] = useState({
  //   _id: "0",
  //   name: "New Course",
  //   number: "New Number",
  //   startDate: "2023-09-10",
  //   endDate: "2023-12-15",
  //   image: "reactapp.png",
  // });
  // const addNewCourse = () => {
  //   const newCourse = { ...course, _id: new Date().getTime().toString() };
  //   setCourses([...courses, { ...course, ...newCourse }]);
  // };
  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

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
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <h2>Published Course</h2>
      <h5>Course to Add</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button className="btn btn-warning" onClick={addNewCourse}>
        Add
      </button>
      <button className="btn btn-danger" onClick={updateCourse}>
        Update
      </button>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((crs) => (
            <div key={crs._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={require(`./images/${crs.image}`)}
                  className="card-image-top"
                  style={{ height: 150 }}
                />
                <div>
                  <Link
                    to={`/Kanbas/Courses/${crs._id}/Home`}
                    className="card-body"
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {(crs.name, crs._id)}
                  </Link>
                  <p className="card-text">{crs.name}</p>
                  <Link
                    className="btn btn-outline-success btn-sm ms-1 mb-1"
                    to={`/Kanbas/Courses/${crs._id}/Home`}
                  >
                    Go
                  </Link>
                  <button
                    className="btn btn-warning btn-sm float-end me-1"
                    onClick={(e) => {
                      e.preventDefault();
                      setCourse(crs);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm float-end me-1"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteCourse(crs._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
