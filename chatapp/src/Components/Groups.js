// import React, { useContext, useEffect, useState } from "react";
// import "./myStyles.css";
// import logo from "../Images/logo1.jpg";
// import { IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import { myContext } from "./MainContainer";

// function Groups() {
//   const userData = JSON.parse(sessionStorage.getItem("userData"));
//   const { refresh, setRefresh } = useContext(myContext);
//   const nav = useNavigate();
//   if (!userData) {
//     console.log("User not Authenticated");
//     nav("/");
//   }
//   const user = userData.data;
//   const [groups, setGroups] = useState([]);
//   const lightTheme = useSelector((state) => state.theme);
//   useEffect(() => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
//       },
//     };

//     axios
//       .get("http://localhost:5000/chat/fetchGroups", config)
//       .then((response) => {
//         setGroups(response.data);
//       });
//   },);
//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//           ease: "anticipate",
//           duration: "0.3",
//         }}
//         exit={{ opacity: 0, scale: 0 }}
//         className="list-container"
//       >
//         <div className={"ug-header" + (lightTheme ? "" : " dark")}>
//           <img
//             src={logo}
//             alt="logo"
//             style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
//           />
//           <p className={"ug-title" + (lightTheme ? "" : " dark")}>
//             Available Groups
//           </p>
//           <IconButton
//             className={"icon" + (lightTheme ? "" : "dark")}
//             onClick={() => {
//               setRefresh(!refresh);
//             }}
//           >
//             <RefreshIcon />
//           </IconButton>
//         </div>
//         <div className={"sb-search" + (lightTheme ? "" : " dark")}>
//           <IconButton>
//             <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <input
//             className={"search-box" + (lightTheme ? "" : " dark")}
//             placeholder="search"
//           />
//         </div>
//         <div className={"ug-list" + (lightTheme ? "" : " dark")}>
//           {groups.map((group, index) => {
//             return (
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.9 }}
//                 className={"list-item" + (lightTheme ? "" : " dark")}
//                 key={index}
//                 onClick={() => {
//                   const config = {
//                     headers: {
//                       Authorization: `Bearer ${userData.data.token}`,
//                     },
//                   };
//                   axios.put(
//                     "http://localhost:5000/chat/addSelfToGroup",
//                     {
//                       chatId: group._id,
//                       userId: userData.data._id,
//                     },
//                     config
//                   );
//                   // dispatch(refreshSidebarFun());
//                 }}
//               >
//                 <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
//                 <p className={"con-title" + (lightTheme ? "" : " dark")}>
//                   {group.chatName}
//                 </p>
//               </motion.div>
//             );
//           })}
//           {/* <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.9 }}
//             className={"list-item" + (lightTheme ? "" : " dark")}
//           >
//             <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
//             <p className={"con-title" + (lightTheme ? "" : " dark")}>
//               Test Group1
//             </p>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.9 }}
//             className={"list-item" + (lightTheme ? "" : " dark")}
//           >
//             <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
//             <p className={"con-title" + (lightTheme ? "" : " dark")}>
//               Test Group2
//             </p>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.9 }}
//             className={"list-item" + (lightTheme ? "" : " dark")}
//           >
//             <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
//             <p className={"con-title" + (lightTheme ? "" : " dark")}>
//               Test Group3
//             </p>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.9 }}
//             className={"list-item" + (lightTheme ? "" : " dark")}
//           >
//             <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
//             <p className={"con-title" + (lightTheme ? "" : " dark")}>
//               Test Group4
//             </p>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.9 }}
//             className={"list-item" + (lightTheme ? "" : " dark")}
//           >
//             <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
//             <p className={"con-title" + (lightTheme ? "" : " dark")}>
//               Test Group5
//             </p>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.9 }}
//             className={"list-item" + (lightTheme ? "" : " dark")}
//           >
//             <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
//             <p className={"con-title" + (lightTheme ? "" : " dark")}>
//               Test Group6
//             </p>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.9 }}
//             className={"list-item" + (lightTheme ? "" : " dark")}
//           >
//             <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
//             <p className={"con-title" + (lightTheme ? "" : " dark")}>
//               Test Group7
//             </p>
//           </motion.div> */}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default Groups;

import React, { useContext, useEffect, useState } from "react";
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "../Images/logo-3.png";
// import logo from "../Images/live-chat_512px.png";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import RefreshIcon from "@mui/icons-material/Refresh";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { refreshSidebarFun } from "../Features/refreshSidebar";
import { myContext } from "./MainContainer";

function Groups() {
  // const [refresh, setRefresh] = useState(true);
  const { refresh, setRefresh } = useContext(myContext);

  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const [groups, SetGroups] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log("Data from LocalStorage : ", userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    console.log("Users refreshed : ", user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get("http://localhost:8080/chat/fetchGroups", config)
      .then((response) => {
        console.log("Group Data from API ", response.data);
        SetGroups(response.data);
      });
  }, [refresh]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.3",
        }}
        className="list-container"
      >
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img
            src={logo}
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
          />
          <p className={"ug-title" + (lightTheme ? "" : " dark")}>
            Available Groups
          </p>
          <IconButton
            className={"icon" + (lightTheme ? "" : " dark")}
            onClick={() => {
              setRefresh(!refresh);
            }}
          >
            <RefreshIcon />
          </IconButton>
        </div>
        <div className={"sb-search" + (lightTheme ? "" : " dark")}>
          <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
            <SearchIcon />
          </IconButton>
          <input
            placeholder="Search"
            className={"search-box" + (lightTheme ? "" : " dark")}
          />
        </div>
        <div className="ug-list">
          {groups.map((group, index) => {
            return (
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={"list-tem" + (lightTheme ? "" : " dark")}
                key={index}
                onClick={() => {
                  console.log("Creating chat with group", group.name);
                  // const config = {
                  //   headers: {
                  //     Authorization: `Bearer ${userData.data.token}`,
                  //   },
                  // };
                  // axios.post(
                  //   "http://localhost:8080/chat/",
                  //   {
                  //     userId: user._id,
                  //   },
                  //   config
                  // );
                  dispatch(refreshSidebarFun());
                }}
              >
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>
                  {group.chatName}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Groups;
