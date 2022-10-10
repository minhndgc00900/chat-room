import React from "react";
import { Link, useParams } from "react-router-dom";
import { chatRooms } from "../../data/chatRoom";
import useChat from "../../hooks/useChat";
import { MessageInput } from "../../components/MessageInput";
import MessageList from "../../components/MessageList";
import "./styles.css";

const ChatRoom = () => {
  const params = useParams();

  const room = chatRooms.find((x) => x.id === params.id);

  if (!room) {
    // TODO: 404
  }

  const { messages, sendMessage } = useChat(room.id);

  return (
    <>
      <h2>{room.title}</h2>
      <div>
        <Link to="/">⬅️ Back to all rooms</Link>
      </div>
      <div className="messages-container">
        <MessageList messages={messages} />
        <MessageInput sendMessage={sendMessage} />
      </div>
    </>
  );
};

export default ChatRoom;
