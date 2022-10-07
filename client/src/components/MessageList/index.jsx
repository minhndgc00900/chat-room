import React, { useLayoutEffect, useRef } from "react";
import { useAuth } from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import "./styles.css";

const Message = ({ message, isOwnMessage }) => {
  const { displayName, body } = message;
  console.log(223, message);
  return (
    <li className={["message", isOwnMessage && "own-message"].join(" ")}>
      <h4 className="sender">{isOwnMessage ? "You" : displayName}</h4>
      <div>{body}</div>
    </li>
  );
};

const MessageList = ({ roomId }) => {
  const containerRef = useRef(null);
  const { user } = useAuth();
  const { messages } = useChat(roomId);
  // const messages = useMessages(roomId);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

  return (
    <div className="message-list-container" ref={containerRef}>
      <ul className="message-list">
        {messages.map((x) => (
          <Message key={x.uuid} message={x} isOwnMessage={x.uid === user.uid} />
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
