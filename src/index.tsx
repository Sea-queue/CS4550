import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// only need to import it once in here. other files don't need to import bootstrap again.
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
