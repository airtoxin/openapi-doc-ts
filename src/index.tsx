import React from "react";
import ReactDOM from "react-dom";
import { spec } from "./spec";
import "swagger-ui-react/swagger-ui.css";

async function startApplication() {
  await import("refractor");
  const SwaggerUI = (await import("swagger-ui-react")).default;
  ReactDOM.render(<SwaggerUI spec={spec} />, document.getElementById("app"));
}

startApplication();
