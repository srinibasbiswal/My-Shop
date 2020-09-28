import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/uikit/dist/css/uikit.css";
import "../node_modules/uikit/dist/js/uikit.js";
import "../node_modules/uikit/dist/js/uikit-icons.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
