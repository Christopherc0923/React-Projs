import React from "react";
import { Link } from "react-router-dom";

export default function ReactItem(props) {
  return (
    <div className="container">
      <hr />
      <div classname="row container">
        <h3>
          {props.isExternal === "true" ? (
            <a
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              {props.title}
            </a>
          ) : (
            <Link to={`/${props.page}`} className="nav-link">
              {props.title}
            </Link>
          )}
        </h3>
      </div>

      <div className="row container">
        <div
          className="container d-flex align-items-center justify-content-center image-container col-lg-6"
          style={{ height: "300px" }}
        >
          <img
            src={props.img}
            alt={props.title}
            className="img-fluid"
            style={{ width: "80%" }}
          />
        </div>

        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h5> Objective </h5>
          <p className="text-justify">{props.description.slice(0, 300)}</p>
          <h5> Skills </h5>
          <p style={{ height: "50px" }}>{props.skill}</p>
        </div>
      </div>
    </div>
  );
}
