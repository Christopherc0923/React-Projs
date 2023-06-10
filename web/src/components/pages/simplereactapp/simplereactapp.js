import React from "react";
import ReactItem from "./reactitem";

export default function SimpleReactApp() {
  return (
    <div className="container-fluid">
      <div className="header">
        <h1 className="text-center">Simple Applications</h1>
      </div>

      <div className="row">
        <ReactItem
          title="Personal Expense Tracker"
          description="During my spare time, I channeled my passion for web development by building this personal website using a combination of frontend and backend technologies"
          skill="Bootstrap, ChartJS, Express HTML/CSS, MongoDB, ReactJS"
          img="DiscordIcon.png"
          page="Expense"
          url=""
          isExternal="false"
        />
      </div>
      <div className="row">
        <ReactItem
          title="LeetCode Question Tracker"
          description="This capstone project aims to use various machine learning models to predict the likelihood of a successful landing for SpaceX's Falcon 9 launch. "
          skill="Bootstrap, Express, HTML/CSS, MongoDB, ReactJS"
          img="DiscordIcon.png"
          page="Leetcode"
          url=""
          isExternal="false"
        />
      </div>
      <div className="row">
        <ReactItem
          title="Weather App"
          description="This capstone project aims to use various machine learning models to predict the likelihood of a successful landing for SpaceX's Falcon 9 launch. "
          skill="API, Bootstrap, ChartJS, HTML/CSS, ReactJS"
          img="DiscordIcon.png"
          page="Weather"
          url=""
          isExternal="false"
        />
      </div>
      <div className="row">
        <ReactItem
          title="Stock App"
          description="This capstone project aims to use various machine learning models to predict the likelihood of a successful landing for SpaceX's Falcon 9 launch. "
          skill="API, Bootstrap, ChartJS, HTML/CSS, ReactJS"
          img="DiscordIcon.png"
          page="stockEarnings"
          url=""
          isExternal="false"
        />
      </div>
    </div>
  );
}
