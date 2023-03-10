import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
