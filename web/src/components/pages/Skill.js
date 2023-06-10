import React from "react";
import SkillList from "./SkillList";

export default function Skill() {
  const programmingLanguages = ["C++", "JavaScript", "Python", "R"];
  const webDevelopment = [
    "BootStrap",
    "Django",
    "Express",
    "GitHub",
    "HTML/CSS",
    "NodeJS",
    "ReactJS",
  ];
  const dataAnalysis = ["Excel", "JMP", "PowerBI", "STATA"];
  const databases = ["MongoDB", "SQL", "Toad"];

  return (
    <div className="container">
      <h3 className="text-center m-3">Skills</h3>
      <div className="container row">
        <div className="col-md-3">
          <div className="row">
            <h5>Programming Languages:</h5>
          </div>
          <div className="row">
            <SkillList items={programmingLanguages} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="row">
            <h5>Web Development:</h5>
          </div>
          <div className="row">
            <SkillList items={webDevelopment} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="row">
            <h5>Data Analysis and Visualization:</h5>
          </div>
          <div className="row">
            <SkillList items={dataAnalysis} />
          </div>
        </div>
        <div className="col-md-3">
          <div className="row">
            <h5>Databases:</h5>
          </div>
          <div className="row">
            <SkillList items={databases} />
          </div>
        </div>
      </div>
    </div>
  );
}
