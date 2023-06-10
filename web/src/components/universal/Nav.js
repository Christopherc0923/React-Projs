import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  {
    /*

  const toggleHandler = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  };

  */
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid row">
          {/* left side */}
          <div className="col-lg-3 col-md-12 text-center" id="leftside">
            <h3 className="nav-item">Personal Website</h3>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="">Expand</span>
            </button>
          </div>

          {/* right side */}
          <div className="col-lg-9 col-md-12" id="rightside">
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/SimpleReactApp" className="nav-link">
                    Simple React App
                  </Link>
                </li>

                {/* Dropdown Menu 
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Form Project
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to="/leetcode" className="dropdown-item">
                      Leetcode
                    </Link>

                    <Link to="/expense" className="dropdown-item">
                      Expense
                    </Link>
                  </div>
                </li>


                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Stock Stuff
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to="/stock" className="dropdown-item">
                      Stock Viewer
                    </Link>

                    <Link to="/stockEarnings" className="dropdown-item">
                      Stock Earnings
                    </Link>
                  </div>
                </li>
                */}

                <li className="nav-item">
                  <button
                    className="nav-link btn"
                    // onSubmit={toggleHandler}
                  >
                    Button
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
