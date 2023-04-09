import React, { useState, useEffect } from "react";
export default function Footer() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });
  return (
    <div className="container text-center">
      <footer className="site-footer footer mt-auto py-3">
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 text-center">
              <h3>Current Time:</h3>
              <h4>{date.toLocaleTimeString()}</h4>
            </div>

            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt, magna id aliquam semper, ligula purus rutrum quam,
                eget tincidunt nibh nulla id velit. Sed id ante id odio
                fermentum tincidunt. Sed velit velit, fermentum vel malesuada
                eu, suscipit id leo. Nam at eleifend nibh. Ut quis fringilla
                nulla, ut aliquam augue. Sed varius.
              </p>
            </div>

            <div className="col-sm-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="https://www.linkedin.com/in/chan-christopher-/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Christopherc0923/Mini-Projs">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/HelloWrongPage/">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/?lang=en">Twitter</a>
                </li>
                <li>
                  <a href="https://discord.com/">Discord</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div className="container">
          <div className="row">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by Chris
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
