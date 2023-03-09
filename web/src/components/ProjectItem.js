import React from "react";

export default function ProjectItem(props) {
  const itemStyle = {
    height: "400px", // Set the desired height here
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
    textAlign: "center",
  };

  return (
    <div style={itemStyle}>
      <img src={props.img} />
      <h3 style={{ height: "120px" }}>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.skill}</p>
    </div>
  );
}
