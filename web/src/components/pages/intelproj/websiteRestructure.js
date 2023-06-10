import React from "react";

export default function WebsiteRestructure() {
  const tabStyle = {
    textIndent: "1em",
  };
  return (
    <div className="container-fluid text-center">
      <div className="header text-center m-2">
        <h2>Intel Module Website Restructure</h2>
      </div>

      <div className="container m-2 text-center">
        <img src="ModuleRestructure.png" style={{ width: "90%" }} />
      </div>

      <div className="container-fluid" style={{ width: "60%" }}>
        <h4 className="text-center"> Objective </h4>
        <p style={tabStyle}>
          I played a crucial role in the design and development of a new website
          aimed at enhancing clarity, visualizing key parametric data, and
          centralizing information for engineers in my group.
        </p>
        <p style={tabStyle}>
          I created a visually appealing and dynamic website across devices
          using Bootstrap framework. I utilized JavaScript to create interactive
          elements. Meticulous structuring of HTML and CSS resulted in an
          intuitive user experience, where information was logically organized.
        </p>
        <p style={tabStyle}>
          I modernized the data processing workflow by migrating from VBA/SQL to
          Python/SQL, automating tasks and improving scalability for new data
          pull. As part of this process, I leveraged Python and SQL to optimize
          data extraction, transformation, and loading tasks, while ensuring
          speedy and efficient data retrieval. The processed data was
          dynamically visualized using powerBI.
        </p>
        <p style={tabStyle}>
          This comprehensive approach transformed the website into a centralized
          hub, empowering engineers with clear data insights, analysis
          capabilities, and efficient data processing.
        </p>
      </div>
    </div>
  );
}
