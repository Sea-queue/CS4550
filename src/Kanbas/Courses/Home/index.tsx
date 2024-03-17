import ModuleList from "../Modules/List";
import "../Modules/index.css";

function Home() {
  return (
    <div>
      <div className="d-flex">
        <ModuleList />
        <div
          className="d-none d-lg-block flex-grow-0 me-2 course-status"
          style={{ width: 250 }}
        >
          <h4>Course Status</h4>
          <button type="button" className="btn btn-info">
            Unpublish
          </button>
          <button type="button" className="btn btn-info">
            Pubslished
          </button>
          <h4>Comming up</h4>
          <hr />
          <h5>Lecture CS4500</h5>
          <h5>Assignment 1 Due Feb 14, 2024</h5>
          <h5>Lab 1 Due Feb 14, 2024</h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
