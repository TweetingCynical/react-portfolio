import React from "react";
import { Link } from "react-router-dom";
import PortfolioNav from "./PortfolioNav";

function Portfolio(props) {
  return (
    <>
      <PortfolioNav />
      <div className="container">
        <h2 className="text-center">{props.title}</h2>
        <div className="card">
          <div className="d-flex justify-content-center">
            <img
              alt={props.alt}
              src={props.image}
              className="portfolio-image"
            ></img>
          </div>
          <div className="card-body m-2 p-2 row text-center">
            <Link className="btn btn-dark m-1 p-2" to={props.deployed}>
              Deployed Link
            </Link>
            <Link className="btn btn-dark m-1 p-2" to={props.repo}>
              Repository Link
            </Link>
          </div>
          <div className="p-2 text-center">
            <p>{props.description}</p>
          </div>
        </div>
        <Link className="btn bg-purple rounded m-3 p-2" to="/projects">
          Back to Projects
        </Link>
      </div>
    </>
  );
}

export default Portfolio;
