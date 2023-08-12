import React, { useState, useEffect } from "react";
import { Products } from "../../products";
import { FilterType } from "../../products";
import { ProductItem } from "./productitem";

const skills = FilterType;

export default function ShopFilter() {
  const [filteredProjects, setFilteredProjects] = useState(Products);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillSelection = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(
        selectedSkills.filter((selectedSkill) => selectedSkill !== skill)
      );
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  useEffect(() => {
    const filtered = Products.filter((project) =>
      selectedSkills.every((skill) => project.skills.includes(skill))
    );
    setFilteredProjects(filtered);
  }, [selectedSkills]);

  return (
    <div
      className="container-fluid row"
      style={{ padding: "0", margin: "0", minHeight: "60vh" }}
    >
      <div className="text-center justify-content-center col-lg-1">
        <h3>Filter</h3>
        <ul className="list-unstyled text-center">
          {skills.map((skill) => (
            <li>
              <button
                key={skill}
                onClick={() => handleSkillSelection(skill)}
                className={
                  selectedSkills.includes(skill)
                    ? "btn btn-success active m-1"
                    : "btn m-1"
                }
              >
                {skill}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="row col-lg-11">
        {filteredProjects.map((product, id) => (
          <div className="col-lg-4" key={id}>
            <ProductItem data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
