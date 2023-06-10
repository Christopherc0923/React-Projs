import React from "react";
import ProjectItem from "./ProjectItem";

export default function Project() {
  return (
    <div className="container">
      <h3 className="text-center">Projects</h3>

      {/* Could look to either add this to mongoDB or make a js file with a dictionary of all projectitem */}

      {/* Row 1 */}
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
      {/* Row 2 */}
      <div className="row">
        <div className="col-lg-4">
          <ProjectItem
            title="Intel Module Website Restructure"
            description="Increased process efficiency and improved clarity for engineers and technicians by rebuilding the website infrastructure using Bootstrap and JavaScript, migrating database pulling from VBA scripting to Python and SQL, and visualizing data with PowerBI. Developed dashboards that visualized data trends for wafer processing tools using PowerBI, resulting in improved data-driven decision-making for manufacturing processes and identifying solutions for unexpected tool errors."
            skill="Python, SQL, TOAD, HTML, CSS, Bootstrap, PowerBI, JavaScript, VBA"
            img="intel.png"
            page="IntelModuleWeb"
            url=""
            isExternal="false"
          />
        </div>
        <div className="col-lg-4">
          <ProjectItem
            title="Intel Capacity ML Model"
            description="Developed machine learning models to determine optimal run condition for wafer processing"
            skill="Python, SQL, TOAD"
            img="intel.png"
            page="IntelAbortML"
            url=""
            isExternal="false"
          />
        </div>
        <div className="col-lg-4">
          <ProjectItem
            title="Nothing Shop"
            description="The website is an online shop that focuses on offering a curated selection of just one product, embodying the principles of minimalism. Their philosophy revolves around the idea that simplicity and elegance can go hand in hand, and that a single remarkable item can make a statement and enhance one's lifestyle. Each item in their collection is meticulously chosen to showcase minimalistic design, functionality, and quality. The website encourages a clutter-free lifestyle and aims to provide customers with a unique shopping experience centered around the beauty and essence of one exceptional product."
            skill="Bootstrap, HTML/CSS, JavaScript, ReactJS"
            img="nothingShop.png"
            page=""
            url=""
            isExternal="true"
          />
        </div>
      </div>
      {/* Row 3 */}
    </div>
  );
}
