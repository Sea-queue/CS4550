function ClickEvent() {
  const hello = () => {
    alert("hello from Seaqueue!");
  };
  const lifeIs = (x: string) => {
    alert(`life is ${x}`);
  };
  return (
    <>
      <h2>Click Event:</h2>
      <button onClick={hello}>Click Hello</button>
      <button onClick={() => lifeIs("Good!")}>Click Life is</button>
      <button
        onClick={() => {
          hello();
          lifeIs("Alright.");
        }}
      >
        Click message
      </button>
    </>
  );
}

export default ClickEvent;
