import React from "react";
import ProjectItem from "./ProjectItem";

export default function Project() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <ProjectItem
            title="Personal Website"
            description="Test Test Test"
            skill="Bootstrap, CSS, Django, HTML, Python, SQLite"
            img=""
          />
        </div>
        <div className="col-sm-12 col-md-4">
          <ProjectItem
            title="IBM Data Science Capstone Project"
            description="Test Test Test"
            skill="Python"
            img=""
          />
        </div>
        <div className="col-sm-12 col-md-4">
          <ProjectItem
            title="Google Data Analytics Case Study"
            description="Test Test Test"
            skill="Python, R"
            img=""
          />
        </div>
      </div>
    </div>
  );
}
