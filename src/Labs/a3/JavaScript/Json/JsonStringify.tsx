function JsonStringify() {
  const squares = [1, 4, 16, 26, 36];

  // JavaScript has a global object called JSON which stands for JavaScript Object Notation.
  // The object provides several useful formatting functions such as stringify() and parse(). Stringify converts JavaScript variables to formatted strings.
  return (
    <>
      <h2>JSON Stringify</h2>
      square = {JSON.stringify(squares)} <br />
    </>
  );
}

export default JsonStringify;
