
// import "bootstrap/dist/css/bootstrap.min.css"
// import 'metismenu/dist/metisMenu'

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { unregister } from "./ServiceWorker";

import "./assets/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'
import "./assets/css/style.css"





ReactDOM.render(<App />, document.getElementById("root"));

unregister();