import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";

function HelloRedux() {
  const { message } = useSelector((state: LabState) => state.helloReducer);
  return (
    <>
      <h1>Hello Redux</h1>
      <h2>{message}</h2>
    </>
  );
}

export default HelloRedux;
