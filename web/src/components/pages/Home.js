import React from "react";
import Project from "../Project";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container">
      <div class="row">
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
            <br />
            <p>I'm Chris</p>
            <p>I current work at Intel as Process Engineer</p>
            <p>Currently looking for a data science or developer opportunity</p>
            <div className="container text-center">
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
      </div>
      <hr />
      <Project />
    </div>
  );
}
