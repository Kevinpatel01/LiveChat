// import React, { useState, createContext } from "react";
// import "./myStyles.css";
// import Sidebar from "./Sidebar";
// import ChatArea from "./ChatArea";
// import Welcome from "./Welcome";
// import CreateGroups from "./CreateGroups";
// import Users_Groups from "./Groups";
// import { Outlet } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// export const myContext = createContext();
// function MainContainer() {
//   const dispatch = useDispatch();
//   const [refresh, setRefresh] = useState(true);
//   const lightTheme = useSelector((state) => state.theme);
 
//   return (
//     <div className= {"main-container" + (lightTheme ? "" : " dark")} >
//       <myContext.Provider value = {{refesh: refresh, setRefresh: setRefresh}}>
//       <Sidebar />
//       <Outlet/>
//       </myContext.Provider>
//       {/* <Welcome/> */}
//       {/* <CreateGroups/> */}
//       {/* <ChatArea props={conversations[0]} /> */}
//       {/* <Users_Groups/> */}
//     </div>
//   );
// }

// export default MainContainer;

import React, { createContext, useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const myContext = createContext();
function MainContainer() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const [refresh, setRefresh] = useState(true);

  return (
    <div className={"main-container" + (lightTheme ? "" : " dark")}>
      <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        <Sidebar />
        <Outlet />
      </myContext.Provider>
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props={conversations[0]} /> */}
      {/* <Users /> */}
      {/* <Groups /> */}
    </div>
  );
}

export default MainContainer;
