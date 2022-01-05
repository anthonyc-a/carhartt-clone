import React from "react";

const HideInfo = ({ hideInfo, setHideInfo }) => {
  return (
    <div
      className="side-nav show-info"
      onClick={() => {
        setHideInfo(!hideInfo);
      }}
    >
      {hideInfo ? <a href="#a">show info</a> : <a href="#a">hide info</a>}
    </div>
  );
};

export default HideInfo;
