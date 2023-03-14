import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import portfolio from "./portfolio.json";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  const portfolioArr = portfolio.map((eachItem) => (
    <Portfolio
      id={eachItem.id}
      key={eachItem.id}
      title={eachItem.title}
      image={eachItem.image}
      alt={eachItem.alt}
      repo={eachItem.repo}
      deployed={eachItem.deployed}
      description={eachItem.description}
    />
  ));

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
            <Route
              path="/react-portfolio/projects/pokemon-top-trumps"
              element={portfolioArr[0]}
            />
            <Route
              path="/react-portfolio/projects/code-quiz"
              element={portfolioArr[1]}
            />
            <Route
              path="/react-portfolio/projects/weather-app"
              element={portfolioArr[2]}
            />
            <Route
              path="/react-portfolio/projects/daily-planner-app"
              element={portfolioArr[3]}
            />
            <Route
              path="/react-portfolio/projects/key-rotation-cipher"
              element={portfolioArr[4]}
            />
            <Route
              path="/react-portfolio/projects/readme-generator"
              element={portfolioArr[5]}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
