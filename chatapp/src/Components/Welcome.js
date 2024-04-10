// import React from 'react'
// import {motion} from "framer-motion";
// import {useNavigate} from "react-router-dom";
// import logo from "../Images/logo1.jpg"

// function Welcome() {
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   const navigate = useNavigate();
//   console.log(userData);
//   const nav = useNavigate();
//     // Check if userData exists
//     if (!userData || !userData.data) {
//       console.log("User not authenticated or data not available");
//       navigate("/");
//       return null; // Return null or any other component to handle this case
//     }
//   return (
//     <div className='welcome-container'>
//       <motion.img drag whileTap={{scale: 1.05, rotate: 360}} src={logo} alt="logo" className='welcome-logo'/>
//       <b>Hi, {userData.data.name}</b>
//       <p>View and text directly to people present in the chat rooms.</p>
//     </div>
//   )
// }

// export default Welcome

import React from "react";
import logo from "../Images/logo-3.png";
// import logo from "../Images/live-chat_512px.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const lightTheme = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
      <motion.img
        drag
        whileTap={{ scale: 1.05, rotate: 360 }}
        src={logo}
        alt="Logo"
        className="welcome-logo"
      />
      <b>Hi , {userData.data.name} 👋</b>
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
}

export default Welcome;
