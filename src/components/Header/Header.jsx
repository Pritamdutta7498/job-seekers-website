import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="job-container">
      <div className="header flex justify-between items-center">
        <Link to="/">
          <p className="text-2xl md:text-4xl font-extrabold text-orange-500 md:ml-6 sm:ml-3 ">JobSeeker</p>
        </Link>
        <div >
          <ul className="hidden md:flex gap-5 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link" : "nav-link-inactive"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive ? "nav-link" : "nav-link-inactive"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/applied"
                className={({ isActive }) =>
                  isActive ? "nav-link" : "nav-link-inactive"
                }
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "nav-link" : "nav-link-inactive"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="job-btn ">
            Start Applying
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
