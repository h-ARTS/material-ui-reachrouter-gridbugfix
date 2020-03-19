import React from "react";
import { Router } from "@reach/router";
import "./styles.css";
// Comps
import Layout from "./Layout";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Material-Ui</h1>
      
        <Router component={Layout}>
          <Home path="/" />
        </Router>
        
    </div>
  );
}
