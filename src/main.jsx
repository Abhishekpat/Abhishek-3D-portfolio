import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

document.body.style.backgroundColor = '#050816';
document.documentElement.style.backgroundColor = '#050816';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
