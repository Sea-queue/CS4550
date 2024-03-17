import { assignments } from "../../Database";
import { useParams, Link } from "react-router-dom";
import "../Modules/index.css";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
      <div>
        <input type="text" placeholder="Search for assignment"></input>
        <button type="button">Group</button>
        <button type="button">Assignment</button>
        <select>
          <option>Edit assignment date</option>
        </select>
      </div>
      <ul className="list-group modules">
        <li className="list-group-itme">
          <div>
            <FaEllipsisV className="me-2" />
            ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Assignments;
