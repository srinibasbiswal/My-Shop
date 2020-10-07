import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routing/Routes";
import store from "./store";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Routes />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
