import { useState } from "react";

function DateStateVariable() {
  // new Date() return current date
  const [startDate, setStartDate] = useState(new Date());
  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
      date.getMonth() + 1
    }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  };
  return (
    <>
      <h2>Date State Variable: </h2>
      <h3>{JSON.stringify(startDate)}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      <input
        className="form-control"
        type="date"
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
    </>
  );
}

export default DateStateVariable;
