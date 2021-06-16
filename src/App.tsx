import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterMain from "./features/Router";
import "antd/dist/antd.css";
function App() {
  return (
    <Router>
      <RouterMain />
    </Router>
  );
}

export default App;
