import React from "react";
import { Link } from "react-router-dom";

export default function ProjectItem(props) {
  const itemStyle = {
    height: "800px",
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
        <h4 className="text-center">Skills Used</h4>
        <p>{props.skill}</p>
      </div>
    </div>
  );
}
