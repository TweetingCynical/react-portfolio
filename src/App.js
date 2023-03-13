import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Router>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/react-portfolio" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
