import React from "react";

const ChooseView = ({ largeView, setLargeView }) => {
  return (
    <div className="side-nav choose-view">
      <ul>
        <li>
          <a
            href="#a"
            onClick={() => {
              largeView && setLargeView(false);
            }}
            className={!largeView ? "active" : ""}
          >
            <div className="small-grid-icon">
              <div className="sg-item"></div>
              <div className="sg-item"></div>
              <div className="sg-item"></div>
              <div className="sg-item"></div>
              <div className="sg-item"></div>
              <div className="sg-item"></div>
              <div className="sg-item"></div>
              <div className="sg-item"></div>
              <div className="sg-item"></div>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#a"
            onClick={() => {
              !largeView && setLargeView(true);
            }}
            className={largeView ? "active" : ""}
          >
            <div className="large-grid-icon">
              <div className="lg-item"></div>
              <div className="lg-item"></div>
              <div className="lg-item"></div>
              <div className="lg-item"></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ChooseView;
