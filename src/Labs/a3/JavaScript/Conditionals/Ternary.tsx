function Ternary() {
  let LoggedIn = false;
  return (
    <div>
      <h2>Logged In</h2>
      {LoggedIn ? <p>Welcome</p> : <p>Please Login</p>}
    </div>
  );
}

export default Ternary;
