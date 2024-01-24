import React from "react";
import ftwLogo from "../ftw.png";

const FTWLogo = () => {
  return (
    <img
      onClick={() => (window.location = "/")}
      src={ftwLogo}
      alt="Fill The Wade Logo"
      style={{ height: "100px", cursor: "pointer" }}
    />
  );
};

export default FTWLogo;
