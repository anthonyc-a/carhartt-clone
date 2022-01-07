import React from "react";

const Nav = () => {
  return (
    <div className="tertiary-nav">
      <div className="breadcrumb">
        <ul>
          <li>
            <a href="/">Men</a>,<a href="/">New Arrivals</a>
          </li>
        </ul>
      </div>
      <div className="filter-section">
        <div className="filter-toggle">
          Refine
          <div className="slider-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line fill="#4a4a4a" x1="4" y1="21" x2="4" y2="14"></line>
              <line fill="#4a4a4a" x1="4" y1="10" x2="4" y2="3"></line>
              <line fill="#4a4a4a" x1="12" y1="21" x2="12" y2="12"></line>
              <line fill="#4a4a4a" x1="12" y1="8" x2="12" y2="3"></line>
              <line fill="#4a4a4a" x1="1" y1="14" x2="7" y2="14"></line>
              <line fill="#4a4a4a" x1="9" y1="8" x2="15" y2="8"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
