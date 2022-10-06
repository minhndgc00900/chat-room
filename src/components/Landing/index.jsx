import React from "react";
import { Link } from "react-router-dom";
import { chatRooms } from "../../data/chatRoom";
import './styles.css';

const Landing = () => {
  return (
    <>
      <h2>Choose a Chat Room</h2>
      <ul className="chat-room-list">
        {chatRooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export { Landing };
