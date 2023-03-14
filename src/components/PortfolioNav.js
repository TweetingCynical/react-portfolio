import React from "react";
import { Link } from "react-router-dom";

const PortfolioNav = () => {
  return (
    <div className="portfolio-nav justify-content-center">
      <Link
        className="btn btn-block bg-purple rounded shadow-lg m-1 p-2"
        to="/react-portfolio/projects/pokemon-top-trumps"
        key={1}
      >
        Pokemon Top Trumps
      </Link>
      <Link
        className="btn btn-block bg-purple rounded shadow-lg m-1 p-2"
        to="/react-portfolio/projects/code-quiz"
        key={2}
      >
        Code Quiz
      </Link>
      <Link
        className="btn btn-block bg-purple rounded shadow-lg m-1 p-2"
        to="/react-portfolio/projects/weather-app"
        key={3}
      >
        Weather App
      </Link>
      <Link
        className="btn btn-block bg-purple rounded shadow-lg m-1 p-2"
        to="/react-portfolio/projects/daily-planner-app"
        key={4}
      >
        Daily Planner
      </Link>
      <Link
        className="btn btn-block bg-purple rounded shadow-lg m-1 p-2"
        to="/react-portfolio/projects/key-rotation-cipher"
        key={5}
      >
        Key Rotation Cipher
      </Link>
      <Link
        className="btn btn-block bg-purple rounded shadow-lg m-1 p-2"
        to="/react-portfolio/projects/readme-generator"
        key={6}
      >
        README Generator
      </Link>
    </div>
  );
};

export default PortfolioNav;
