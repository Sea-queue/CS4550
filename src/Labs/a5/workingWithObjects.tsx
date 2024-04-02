import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: 1,
    name: "Week 11",
    description: "intro to OCaml",
    course: "NodeJS",
  });

  const [isComplete, setIsComplete] = useState(false);

  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
  const MODULE_URL = `${API_BASE}/a5/module`;

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <input
        type="text"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
      />
      <button onClick={updateTitle}>Update Title to: {assignment.title}</button>
      <button onClick={fetchAssignment}>Fetch Assignment</button>
      <p>{JSON.stringify(assignment)} </p>

      <h4>Retrieving Objects</h4>
      <a
        className="btn btn-primary"
        href={`${API_BASE}/a5/assignment`}
        target="_blank"
      >
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        className="btn btn-primary"
        href={`${API_BASE}/a5/assignment/title`}
        target="_blank"
      >
        Get Title
      </a>

      <h4>Modifying Properties</h4>
      <label>Title:</label>
      <input
        type="text"
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
      />
      <a
        className="btn btn-primary ms-3 me-3"
        href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
        target="_blank"
      >
        Update title
      </a>
      <label>Score:</label>
      <input
        type="number"
        onChange={(e) =>
          setAssignment({
            ...assignment,
            score: parseInt(e.target.value),
          })
        }
      />
      <a
        className="btn btn-primary ms-3 me-3"
        href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
        target="_blank"
      >
        Update score
      </a>

      <label>Completed: </label>
      <input
        type="checkbox"
        onChange={() => {
          setAssignment({
            ...assignment,
            completed: !isComplete,
          });
          setIsComplete(!isComplete);
        }}
      />
      <a
        className="btn btn-primary ms-3 me-3"
        href={`${ASSIGNMENT_URL}/status/${assignment.completed}`}
        target="_blank"
      >
        Update status
      </a>

      <h4>Retrieving Module</h4>
      <a
        className="btn btn-primary me-3"
        href={`${MODULE_URL}`}
        target="_blank"
      >
        Get Module
      </a>
      <h4>Retrieving the Module name</h4>
      <a
        className="btn btn-primary me-3"
        href={`${MODULE_URL}/name`}
        target="_blank"
      >
        Get Module Name
      </a>
      <h4>Changing the Module name</h4>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        className="btn btn-primary ms-3 me-3"
        href={`${MODULE_URL}/name/${module.name}`}
        target="_blank"
      >
        Set Module Name
      </a>
      <h4>Update the Module Description</h4>
      <input
        type="text"
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <a
        className="btn btn-primary ms-3 me-3"
        href={`${MODULE_URL}/description/${module.description}`}
        target="_blank"
      >
        Update Module Description
      </a>
    </>
  );
}

export default WorkingWithObjects;
