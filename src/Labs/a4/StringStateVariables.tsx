import React, { useState } from "react";

function StringStateVariables() {
  const [firstName, setFristName] = useState("Seaqueue");
  return (
    <>
      <h2>String State Variables: </h2>
      <p>{firstName}</p>
      <input
        className="form-control"
        value={firstName}
        onChange={(e) => setFristName(e.target.value)}
      />
    </>
  );
}

export default StringStateVariables;
