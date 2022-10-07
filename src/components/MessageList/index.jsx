import React, { useLayoutEffect, useRef } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useMessages } from "../../hooks/useMessages";
import "./styles.css";

const Message = ({ message, isOwnMessage }) => {
    const { displayName, text } = message;

    return (
        <li className={['message', isOwnMessage && 'own-message'].join(' ')}>
            <h4 className='sender'>{isOwnMessage ? 'You' : displayName}</h4>
            <div>{text}</div>
        </li>
    )
}

const MessageList = ({ roomId }) => {
  const containerRef = useRef(null);
  const { user } = useAuth();
  const messages = useMessages(roomId);

  useLayoutEffect(() => {
    if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

  return (<div className="message-list-container" ref={containerRef}>
    <ul className="message-list">
        {messages.map(x => (
            <Message key={x.id} message={x} isOwnMessage={x.uid === user.uid} />
        ))}
    </ul>
  </div>);
};

export default MessageList;
