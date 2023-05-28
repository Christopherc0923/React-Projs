import React from "react";
import Project from "./Project";
import { Link } from "react-router-dom";
import backToTop from "./backToTop";

export default function About() {
  return (
    <div className="container">
      <div class="row">
        <br />
        <div className="col-md-6">
          <img
            src="github_logo.png"
            style={{ height: "auto", width: "80%", objectFit: "contain" }}
          />
        </div>
        <div
          className="col-md-6 d-flex align-items-center"
          style={{ padding: "30px" }}
        >
          <div className="container">
            <h3>Hello!</h3>
            <br />
            <p>I'm Chris</p>
            <p>I currently work at Intel as Process Engineer.</p>
            <p>
              I am open to opportunities in machine learning and backend
              development{" "}
            </p>
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
