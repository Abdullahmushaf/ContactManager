import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";

const About = () => {
  const authContext = useContext(AuthContext);

  console.log(authContext);
  return <div>About</div>;
};

export default About;
