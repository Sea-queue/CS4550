import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./workingWithObjects";
import WorkingWithArrays from "./workingWithArrays";

const API_BASE = process.env.REACT_APP_API_BASE_A6;

function Assignment5() {
  return (
    <div className="ms-5">
      <h1>A5</h1>
      <a href={`${API_BASE}/a5/welcome`} target="_blank">
        Welcome
      </a>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Assignment5;
