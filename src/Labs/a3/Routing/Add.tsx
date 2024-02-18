import { useParams } from "react-router-dom";

function Add() {
  const { a, b } = useParams();
  return (
    <>
      <h2>Add Path parameters</h2>
      {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
    </>
  );
}

export default Add;
