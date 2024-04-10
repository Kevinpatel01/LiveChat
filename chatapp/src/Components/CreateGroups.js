// import React, { useState } from "react";
// import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
// import Button from "@mui/material/Button";
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import { IconButton } from "@mui/material";
// import { useSelector } from "react-redux";
// import {useNavigate} from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";

// function CreateGroups() {
//   const userData = JSON.parse(sessionStorage.getItem("userData"));
//   const nav = useNavigate();
//   if(!userData){
//     console.log("User not Authenticated");
//     nav("/");
//   }
//   const user = userData.data;
//   const [groupName, setGroupName] = useState("");
//   const [open, setOpen] = React.useState(false);
//   const lightTheme = useSelector((state) => state.theme);

//   const handleClickOpen = () => {
//     setOpen(true);
//   }

//   const handleClose = () => {
//     setOpen(false);
//   }

//   const createGroup = () => {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${user.token}`,
//       },
//     };

//     axios.post("http://localhost:5000/chat/createGroup", {
//       name: groupName,
//       users: '["66127868cc9278102a28df9d", "6612769dcc9278102a28df98"]',
//     },
//     config
//   );
//   nav("/app/groups");
//   };
//   return (
//     <>
//     <div>
//       <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
//         <DialogTitle id="alert-dialog-title">{"Do you want to create a Group Named " + groupName}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">This will create a group in which you will be the admin and other will be able to join this group.</DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={() => {createGroup(); handleClose(); }} autoFocus>Agree</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//     <div className={"createGroups-container" + (lightTheme ? "" : " dark")}>
//       <input placeholder="Enter Group Name" className={"search-box" + (lightTheme ? "" : " dark")} onChange={(e) => {setGroupName(e.target.value)}} />
//       <IconButton className={"icon" + (lightTheme ? "" : " dark")} onClick={() => {handleClickOpen();}}></IconButton>
//     </div>
//     </>
//     // <motion.div
//     //   initial={{ opacity: 0, scale: 0 }}
//     //   animate={{ opacity: 1, scale: 1 }}
//     //   transition={{
//     //     ease: "easeInOut",
//     //     duration: "0.3",
//     //   }}
//     //   exit={{ opacity: 0, scale: 0 }}
//     //   className={"createGroup-container" + (lightTheme ? "" : " dark")}
//     // >
//     //   <input
//     //     placeholder="Enter Group Name"
//     //     className={"search-box" + (lightTheme ? "" : " dark")}
//     //   />
//     //   <IconButton>
//     //     <DoneOutlineRoundedIcon
//     //       className={"icon" + (lightTheme ? "" : " dark")}
//     //     />
//     //   </IconButton>
//     // </motion.div>
//   );
// }

// export default CreateGroups;

import React, { useState } from "react";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { create } from "@mui/material/styles/createTransitions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateGroups() {
  const lightTheme = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log("Data from LocalStorage : ", userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }
  const user = userData.data;
  const [groupName, setGroupName] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("User Data from CreateGroups : ", userData);

  const createGroup = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.post(
      "http://localhost:8080/chat/createGroup",
      {
        name: groupName,
        users: '["66127aa32ccef01ac384780e","66155a2ef1a561206289b091"]',
      },
      config
    );
    nav("/app/groups");
  };

  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do you want to create a Group Named " + groupName}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This will create a create group in which you will be the admin and
              other will be able to join this group.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button
              onClick={() => {
                createGroup();
                handleClose();
              }}
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className={"createGroups-container" + (lightTheme ? "" : " dark")}>
        <input
          placeholder="Enter Group Name"
          className={"search-box" + (lightTheme ? "" : " dark")}
          onChange={(e) => {
            setGroupName(e.target.value);
          }}
        />
        <IconButton
          className={"icon" + (lightTheme ? "" : " dark")}
          onClick={() => {
            handleClickOpen();
            // createGroup();
          }}
        >
          <DoneOutlineRoundedIcon />
        </IconButton>
      </div>
    </>
  );
}

export default CreateGroups;