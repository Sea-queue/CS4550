const add = (a: number, b: number) => {
  alert(`${a} + ${b} = ${a + b}`);
};
function PassingDataOnEvent() {
  return (
    <>
      <h2>Passing Data on Event:</h2>
      {/* WRONG:  onClick={add(2, 3)}> */}
      <button onClick={() => add(2, 3)} className="btn btn-primary">
        Pass 2 and 3 to add()
      </button>
    </>
  );
}

export default PassingDataOnEvent;
