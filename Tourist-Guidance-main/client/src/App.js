import React from "react";
import "./App.scss";
import AllRoutes from "./AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <div id="app">
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
};
export default App;
