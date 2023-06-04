import React from "react";
import SkillItem from "./SkillItem";

const SkillList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <SkillItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default SkillList;
