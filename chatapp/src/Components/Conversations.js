import React, { useState } from 'react'
import ConversationItem from './ConversationItem';
import { useSelector } from 'react-redux';

function Conversations() {
    const lightTheme = useSelector((state) => state.theme);

    const [conversations, setConversations] = useState([
        {
          name: "Test1",
          lastMessage: "Last Message 1",
          timeStamp: "today",
        },
        {
          name: "Test2",
          lastMessage: "Last Message 2",
          timeStamp: "today",
        },
        {
          name: "Test3",
          lastMessage: "Last Message 3",
          timeStamp: "today",
        },
      ]);
  return (
    <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation) => {
          return (
            <ConversationItem props={conversation} key={conversation.name} />
          );
        })}
      </div>
  )
}

export default Conversations
