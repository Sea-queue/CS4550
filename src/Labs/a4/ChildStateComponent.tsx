function ChildStateComponent({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  return (
    <>
      <h2>Child-Counter {counter}</h2>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-primary mr-2"
      >
        Increment
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className="btn btn-primary ml-2"
      >
        Decrement
      </button>
    </>
  );
}

export default ChildStateComponent;
