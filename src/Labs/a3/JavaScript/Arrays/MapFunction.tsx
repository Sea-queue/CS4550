function MapFunction() {
  let numberArray1 = [1, 2, 3, 4, 5];
  const square = (a: number) => a * a;
  // An array's map function can iterate over an array's values, apply a function to each value,
  // and collate all the results in a new array.
  const squares = numberArray1.map(square);
  // passing a lambda function
  const cubes = numberArray1.map((a) => a * a * a);

  return (
    <>
      <h2>Map</h2>
      squares = {squares} <br />
      cubes = {cubes} <br />
    </>
  );
}

export default MapFunction;
