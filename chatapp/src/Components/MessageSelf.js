// import React from 'react'
// import { useSelector } from 'react-redux';

// function MessageSelf() {
//   const lightTheme = useSelector((state) => state.theme);
//     var props = {name: "OtherUser", message: "This is a sample message"}
//   return (
//     <div className={'self-message-container' + (lightTheme ? "" : " dark")}>
//       <div className={'messageBox' + (lightTheme ? "" : " dark")}>
//         <p>{props?.message}</p>
//         <p className={"self-timeStamp" + (lightTheme ? "" : " dark")}>12:00 a.m.</p>
//       </div>
//     </div>
//   )
// }

// export default MessageSelf

import React from "react";

function MessageSelf({ props }) {
  // console.log("Message self Prop : ", props);
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p style={{ color: "black" }}>{props.content}</p>
        {/* <p className="self-timeStamp" style={{ color: "black" }}>
          12:00am
        </p> */}
      </div>
    </div>
  );
}

export default MessageSelf;
