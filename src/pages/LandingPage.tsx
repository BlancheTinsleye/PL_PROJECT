// import React from "react";
// import { useNavigate } from "react-router-dom";
import Ghost1 from "../neon_drawings/Ghost1";
import Glimmer1 from "../neon_drawings/Glimmer1";
import Moon1 from "../neon_drawings/Moon1";
import '../styles/landingpage_styles.css'

const LandingPage = () => {
  // const navigate = useNavigate();

  // const goToLogIn = () => {
  //   navigate("/LogIn"); // Navigates to /about route
  // };

  return (
    <>
      <Ghost1></Ghost1>
      <Glimmer1></Glimmer1>
      <Moon1></Moon1>
      {/* <h1>Home Page</h1>
      <button onClick={goToLogIn}>Log in</button> */}
    </>
  );
};

export default LandingPage;
