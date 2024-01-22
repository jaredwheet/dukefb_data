import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        fontSize: "smaller",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      &copy; Fill the Wade 2024 -{" "}
      <a href="mailto:ftwdatateam@gmail.com"> contact us.</a>
    </footer>
  );
};

export default Footer;
