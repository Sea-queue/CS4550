import React, { useState } from "react";

function EventObject() {
  const [event, setEvent] = useState(null);
  const handleClick = (e: any) => {
    e.target = e.target.outerHTML;
    delete e.view;
    setEvent(e);
  };
  return (
    // button that triggers event when clicked  passes event to handler to update variable.
    // TODO: ask about the Event
    <>
      <h2>Event Object:</h2>
      <button
        id="event-button"
        onClick={(e) => handleClick(e)}
        className="btn btn-primary"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
    </>
  );
}

export default EventObject;
