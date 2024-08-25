import React from "react";
import Navbar from "../../common/Navbar";

const Default = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default Default;
