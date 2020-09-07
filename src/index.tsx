import React from "react";
import ReactDOM from "react-dom";
import { spec } from "./spec";
import "swagger-ui-react/swagger-ui.css";

async function startApplication() {
  // Workaround for Cannot find module '../node_modules/refractor/lang/markup.js'
  // https://github.com/parcel-bundler/parcel/issues/3176#issuecomment-642568855
  await import("refractor");
  const SwaggerUI = (await import("swagger-ui-react")).default;
  ReactDOM.render(<SwaggerUI spec={spec} />, document.getElementById("app"));
}

startApplication();
