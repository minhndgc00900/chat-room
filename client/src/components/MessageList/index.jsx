import React, { useLayoutEffect, useRef } from "react";
import "./styles.css";

const Message = ({ message, isOwnMessage }) => {
  const { displayName, body } = message;
  return (
    <li className={["message", isOwnMessage && "own-message"].join(" ")}>
      <h4 className="sender">{isOwnMessage ? "You" : displayName}</h4>
      <div>{body}</div>
    </li>
  );
};

const MessageList = ({ messages }) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

  return (
    <div className="message-list-container" ref={containerRef}>
      <ul className="message-list">
        {messages.map((x) => (
          <Message key={x.uuid} message={x} isOwnMessage={x.ownedByCurrentUser} />
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
