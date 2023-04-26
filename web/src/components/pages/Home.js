import React from "react";
import Project from "../Project";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container">
      <div class="row">
        <h1 className="text-center" style={{ padding: "20px" }}>
          Welcome to my Personal Website
        </h1>
        <br />
        <div className="col-6">
          <img
            src="github_logo.png"
            style={{ height: "auto", width: "80%", objectFit: "contain" }}
          />
        </div>
        <div
          className="col-6 d-flex align-items-center"
          style={{ padding: "30px" }}
        >
          <div className="container">
            <h3>Hello!</h3>
            <p>I'm Christopher Chan</p>
            <p>Process Engineer at Intel</p>
            <p>Currently looking for a data science or developer opportunity</p>
            <button
              className="btn btn-outline-primary"
              style={{ margin: "5px" }}
            >
              <Link to="/about" className="nav-link">
                About Me
              </Link>
            </button>

            <button
              className="btn btn-outline-primary"
              style={{ margin: "5px" }}
            >
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <Project />
    </div>
  );
}
