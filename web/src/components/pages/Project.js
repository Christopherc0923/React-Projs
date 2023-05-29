import React from "react";
import ProjectItem from "./ProjectItem";

export default function Project() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <ProjectItem
            title="Personal Website"
            description="During my spare time, I channeled my passion for web development by building this personal website using a combination of frontend and backend technologies. To enhance the website's appearance, I utilized Bootstrap, HTML, and CSS to create an interactive and visually appealing frontend. In addition, I incorporated a backend framework, Django, to ensure the website was efficient and user-friendly. To store and manage data, I used SQLite, a robust database management system. Throughout the development process, I encountered challenges, but I used my problem-solving skills to overcome them and improve the functionality and appearance of the website. I am proud of this achievement and am excited to continue enhancing my skills in web development."
            skill="Bootstrap, CSS, Django, HTML, Python, SQLite"
            img="DiscordIcon.png"
            page=""
            url="http://christopherc0923.pythonanywhere.com/"
            isExternal="true"
          />
        </div>
        <div className="col-lg-4">
          <ProjectItem
            title="IBM Data Science Capstone Project"
            description="This capstone project aims to use various machine learning models to predict the likelihood of a successful landing for SpaceX's Falcon 9 launch. Data is collected through API and webscraping methods, and then cleaned and analyzed. The goal is to identify the most accurate model for predicting successful landings and gain insights into the launch success rate."
            skill="Python"
            img="IBMDS.png"
            page="IBM"
            url=""
            isExternal="false"
          />
        </div>
        <div className="col-lg-4">
          <ProjectItem
            title="Google Data Analytics Case Study"
            description="This Google data analytics project involved utilizing technologies such as Python, R, and SQL to analyze a large dataset of member and casual bike rider data. Our goal was to uncover insights about the two groups, including differences in trip duration, time of day, and distance traveled. By cleaning, transforming, and visualizing the data, we were able to provide valuable insights that can inform business decisions and improve the overall biking experience."
            skill="Python, R"
            img="Citibike.jpg"
            page=""
            url="https://www.google.com"
            isExternal="true"
          />
        </div>
      </div>
    </div>
  );
}