import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div>
      <nav className={`navbar ${mobileMenu ? "active" : ""}`}>
        <div className="title-container">
          <Link
            to="/"
            className="main-title"
            onClick={() => setMobileMenu(false)}
          >
            UQuiz
          </Link>

          <div
            className={`mobile-toggle ${mobileMenu ? "active" : ""}`}
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <div className="line"></div>

            <div className="line"></div>

            <div className="line"></div>
          </div>
        </div>

        <ul className={`nav-container ${mobileMenu && "active"}`}>
          <li
            className="nav-items"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <Link
              to="/"
              className={`${({ isActive }) => isActive && "active"}>`}
            >
              Home
            </Link>
          </li>

          <li
            className="nav-items"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <Link
              to="/create+quiz"
              className={`${({ isActive }) => isActive && "active"}`}
            >
              Create Quiz
            </Link>
          </li>

          <li
            className="nav-items"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <Link
              to="/quiz+page"
              className={`${({ isActive }) => isActive && "active"}`}
            >
              Quiz Page
            </Link>
          </li>

          <li
            className="nav-items"
            onClick={() => setMobileMenu(mobileMenu ? false : true)}
          >
            <Link
              to="/settings"
              className={`${({ isActive }) => isActive && "active"}`}
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;