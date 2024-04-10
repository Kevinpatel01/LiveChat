// import "./myStyles.css";
// import axios from "axios";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import NightlightIcon from "@mui/icons-material/Nightlight";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import { useNavigate } from "react-router-dom";
// import { light } from "@mui/material/styles/createPalette";
// import { useDispatch, useSelector } from "react-redux";
// import { store } from "../Features/store";
// import { toggleTheme } from "../Features/themeSlice";
// import Conversations from "./Conversations";
// import { useContext, useEffect, useState } from "react";
// import myContext from "./MainContainer";

// function Sidebar() {
//   const lightTheme = useSelector((state) => state.theme);
//   const dispatch = useDispatch();

//   const { refresh, setRefresh } = useContext(myContext);
//   const [conversations, setConversations] = useState([]);
//   const userData = JSON.parse(sessionStorage.getItem("userData"));
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   if(!userData){
//     console.log("User not Authenticated");
//     navigate("/");
//   }

//   const user = userData.data;
//   useEffect(()=>{
//     const config = {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
//       },
//     };

//     axios.get("http://localhost:5000/chat/", config).then((response) => {
//       setConversations(response.data);
//     });
//   }, [refresh])

//   const handleToggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   return (
//     <div className={"sidebar-container" + (isSidebarOpen ? " show" : "")}>
//       {/* <button className="hamburger-menu" onClick={handleToggleSidebar}>
//         <svg width="100" height="100" viewBox="0 0 100 100">
//           <path
//             class="line line1"
//             d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
//           />
//           <path class="line line2" d="M 20,50 H 80" />
//           <path
//             class="line line3"
//             d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
//           />
//         </svg>
//       </button> */}
//       <div className={"sb-header" + (lightTheme ? "" : " dark")}>
//         <div className="other-icons">
//           <IconButton>
//             <AccountCircleIcon
//               className={"icon" + (lightTheme ? "" : " dark")}
//             />
//           </IconButton>
//           <IconButton
//             onClick={() => {
//               navigate("users");
//             }}
//           >
//             <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton
//             onClick={() => {
//               navigate("groups");
//             }}
//           >
//             <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//           <IconButton
//             onClick={() => {
//               navigate("create-groups");
//             }}
//           >
//             <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>

//           <IconButton onClick={() => dispatch(toggleTheme())}>
//             {lightTheme && (
//               <NightlightIcon
//                 className={"icon" + (lightTheme ? "" : " dark")}
//               />
//             )}
//             {!lightTheme && (
//               <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
//             )}
//             {/* <NightlightIcon /> */}
//           </IconButton>
//           <IconButton onClick={() => {localStorage.removeItem("userData"); navigate("/");}}>
//             <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
//           </IconButton>
//         </div>
//       </div>
//       <div className={"sb-search" + (lightTheme ? "" : " dark")}>
//         <IconButton>
//           <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />
//         </IconButton>
//         <input
//           className={"search-box" + (lightTheme ? "" : " dark")}
//           placeholder="search"
//         />
//       </div>
//       <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
//         {conversations.map((conversation, index) => {
//           var chatName = "";
//           if(conversation.isGroupChat){
//             chatName = conversation.chatName;
//           }else{
//             conversation.users.map((user) => {
//               if(user._id !== userData.data._id){
//                 chatName = user.name;
//               }
//             });
//           }
//           if(conversation.latestMessage === undefined){
//             return(
//               <div key={index} onClick={() => {setRefresh(!refresh);}}>
//                 <div key={index} className="conversation-container" onClick={() =>{navigate("chat/" + conversation._id + "&" + chatName);}}>
//                   <p className={"con-icon" + (lightTheme ? "" : " dark")}>{chatName[0]}</p>
//                   <p className={"con-title" + (lightTheme ? "" : " dark")}>{chatName}</p>
//                   <p className="con-lastMessage">No previous Messages, click here to start a new chat</p>
//                 </div>
//               </div>
//             );
//           } else{
//             return(
//               <div key={index} className="conversation-container" onClick={() =>{navigate("chat/" + conversation._id + "&" + chatName);}}>
//                   <p className={"con-icon" + (lightTheme ? "" : " dark")}>{chatName[0]}</p>
//                   <p className={"con-title" + (lightTheme ? "" : " dark")}>{chatName}</p>
//                   <p className="con-lastMessage">{conversation.latestMessage.content}</p>
//                 </div>
//             );
//           }
//         })}
//       </div>
//       {/* <Conversations /> */}
//     </div>
//   );
// }

// export default Sidebar;

import React, { useContext, useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
import axios from "axios";
import { refreshSidebarFun } from "../Features/refreshSidebar";
import { myContext } from "./MainContainer";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  // const refresh = useSelector((state) => state.refreshKey);
  const { refresh, setRefresh } = useContext(myContext);
  console.log("Context API : refresh : ", refresh);
  const [conversations, setConversations] = useState([]);
  // console.log("Conversations of Sidebar : ", conversations);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log("Data from LocalStorage : ", userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    // console.log("Sidebar : ", user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.get("http://localhost:8080/chat/", config).then((response) => {
      console.log("Data refresh in sidebar ", response.data);
      setConversations(response.data);
      // setRefresh(!refresh);
    });
  }, [refresh]);

  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div className="other-icons">
          <IconButton
            onClick={() => {
              nav("/app/welcome");
            }}
          >
            <AccountCircleIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>

          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>

          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {lightTheme && (
              <NightlightIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            )}
            {!lightTheme && (
              <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              localStorage.removeItem("userData");
              navigate("/");
            }}
          >
            <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>
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
      <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation, index) => {
          // console.log("current convo : ", conversation);
          if (conversation.users.length === 1) {
            return <div key={index}></div>;
          }
          if (conversation.latestMessage === undefined) {
            // console.log("No Latest Message with ", conversation.users[1]);
            return (
              <div
                key={index}
                onClick={() => {
                  console.log("Refresh fired from sidebar");
                  // dispatch(refreshSidebarFun());
                  setRefresh(!refresh);
                }}
              >
                <div
                  key={index}
                  className="conversation-container"
                  onClick={() => {
                    navigate(
                      "chat/" +
                        conversation._id +
                        "&" +
                        conversation.users[1].name
                    );
                  }}
                  // dispatch change to refresh so as to update chatArea
                >
                  <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                    {conversation.users[1].name[0]}
                  </p>
                  <p className={"con-title" + (lightTheme ? "" : " dark")}>
                    {conversation.users[1].name}
                  </p>

                  <p className="con-lastMessage">
                    No previous Messages, click here to start a new chat
                  </p>
                  {/* <p className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
                {conversation.timeStamp}
              </p> */}
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="conversation-container"
                onClick={() => {
                  navigate(
                    "chat/" +
                      conversation._id +
                      "&" +
                      conversation.users[1].name
                  );
                }}
              >
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                  {conversation.users[1].name[0]}
                </p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>
                  {conversation.users[1].name}
                </p>

                <p className="con-lastMessage">
                  {conversation.latestMessage.content}
                </p>
                {/* <p className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
                {conversation.timeStamp}
              </p> */}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Sidebar;