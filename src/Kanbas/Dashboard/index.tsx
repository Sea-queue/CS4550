import { Link } from "react-router-dom";
import { courses } from "../Database";
import reactapp from "./images/reactapp.png";

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <h2>Published Course</h2>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={require(`./images/${course.image}`)}
                  className="card-image-top"
                  style={{ height: 150 }}
                />
                <div>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="card-body"
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`}>Go</Link>
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
