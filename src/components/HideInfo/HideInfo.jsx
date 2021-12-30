import React from "react";

const HideInfo = ({ hideInfo, setHideInfo }) => {
  return (
    <div
      className="side-nav show-info"
      onClick={() => {
        setHideInfo(!hideInfo);
      }}
    >
      {hideInfo ? <a href="//:0">show info</a> : <a href="//:0">hide info</a>}
    </div>
  );
};

export default HideInfo;
