import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { unregister } from "./ServiceWorker";

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/font-awesome/css/font-awesome.css";
import "./../node_modules/animate.css/animate.min.css";
import "./assets/css/style.css";

// eslint-disable-next-line
import $ from "jquery";
import "metismenu";
import "bootstrap";

ReactDOM.render(<App />, document.getElementById("root"));

unregister();
