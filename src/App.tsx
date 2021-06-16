import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterMain from "./features/Router";
import "antd/dist/antd.css";
import "./App.css";
import AuthMain from "./features/auth/authMain";
function App() {
  return (
    <Router>
      <AuthMain>
        <RouterMain />
      </AuthMain>
    </Router>
  );
}

export default App;
