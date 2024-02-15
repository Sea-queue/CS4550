function Destructing() {
  const person = { name: "John", age: 25 };
  //const name = person.name
  //const age = person.age
  const { name, age } = person;
  const numbers = ["one", "two", "three"];
  const [first, second, third] = numbers;

  return (
    <>
      <h2>Destructing</h2>
      <h3>Object Drestructing</h3>
      const &#123; name, age &#125; = &#123; name: "John", age: 25 &#125; <br />
      name = {name}
      age = {age}
      <h3>Array Destructing</h3>
      const [first, second, thrid] = ['one', 'two', 'three'] <br />
      first = {first} <br />
      second = {second} <br />
      third = {third}
    </>
  );
}

export default Destructing;
