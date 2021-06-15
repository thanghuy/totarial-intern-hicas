import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouterMain from "./features/Router";
function App() {
  return (
    <Router>
      <div className="App">
        <RouterMain />
      </div>
    </Router>
  );
}

export default App;
