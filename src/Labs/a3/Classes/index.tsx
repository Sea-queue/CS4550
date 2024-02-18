import "./index.css";

function Classes() {
  const color = "blue";
  const dangerous = true;
  return (
    <>
      <h2>Classes</h2>
      <div className="bg-yellow fg-black padding-10px">Yellow background</div>
      <div className="bg-blue fg-black padding-10px">Blue background</div>
      <div className="bg-red fg-black padding-10px">Red background</div>
      <div className={`bg-${color} fg-black padding-10px`}>
        Dynamic Blue Background
      </div>
      <div
        className={`${dangerous ? "bg-red" : "bg-green"} fg-black padding-10px`}
      >
        Dangerous Background
      </div>
    </>
  );
}
export default Classes;
