import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const widgetDiv = document.getElementById("react-timeline-js");

ReactDOM.render(
  <StrictMode>
    <App domElement={widgetDiv} />
  </StrictMode>
);
