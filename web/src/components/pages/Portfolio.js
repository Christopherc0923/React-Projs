import React from "react";

export default function Portfolio() {
  const resumeUrl = "../media/Chan Christopher Resume 2023.pdf";

  return (
    <div className="container text-center">
      <h2>Portfolio Page</h2>
      <p>Here you can learn more about me and see my portfolio.</p>
      <hr />
      <iframe
        src={resumeUrl}
        width="800"
        height="1100"
        title="Resume"
        style={{ zIndex: 1 }}
      ></iframe>
    </div>
  );
}
