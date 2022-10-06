import React from "react";
import { Link, useParams } from "react-router-dom";
import { chatRooms } from "../../data/chatRoom";
import './styles.css';


const ChatRoom = () => {
  const params = useParams();

  const room = chatRooms.find((x) => x.id === params.id);
  if (!room) {
    // TODO: 404
  }

  return (
    <>
      <h2>{room.title}</h2>
      <div>
        <Link to="/">⬅️ Back to all rooms</Link>
      </div>
      <div className="messages-container">{/* TODO */}</div>
    </>
  );
};

export default ChatRoom;
