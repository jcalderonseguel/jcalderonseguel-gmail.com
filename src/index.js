import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { unregister } from "./ServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";

import "./../node_modules/font-awesome/css/font-awesome.css";
import "./../node_modules/animate.css/animate.min.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";

ReactDOM.render(<App />, document.getElementById("root"));

unregister();
