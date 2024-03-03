// TODO: ask the type declaration.
function PassingFunctions({ theFunction }: { theFunction: () => void }) {
  return (
    <>
      <h2>Passing Functions:</h2>
      <button onClick={theFunction} className="btn btn-primary">
        Invoke the Function
      </button>
    </>
  );
}

export default PassingFunctions;
