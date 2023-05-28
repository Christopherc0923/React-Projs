import React from "react";
import { Link } from "react-router-dom";

export default function ProjectItem(props) {
  const itemStyle = {
    height: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
    textAlign: "center",
  };

  return (
    <div className="container" style={itemStyle}>
      <div classname="container">
        <h3 style={{ height: "120px" }}>
          {props.isExternal == "true" ? (
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

      <hr />

      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "300px" }}
      >
        <img src={props.img} alt={props.title} width="100%" />
      </div>

      <hr />

      <div className="container text-center">
        <p className="text-justify">{props.description.slice(0, 200)}</p>
        <hr />
        <p style={{ height: "50px" }}>{props.skill}</p>
      </div>
    </div>
  );
}
