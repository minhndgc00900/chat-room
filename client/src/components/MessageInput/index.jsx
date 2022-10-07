import React, { useState } from "react";
import useChat from "../../hooks/useChat";
import "./styles.css";

const MessageInput = ({ roomId }) => {
//   const { user } = useAuth();
  const { sendMessage } = useChat(roomId);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // sendMessage(roomId, user, value);
    // setValue("");
    sendMessage(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="message-input-container">
      <input
        type="text"
        placeholder="Enter a message"
        value={value}
        onChange={handleChange}
        className="message-input"
        required
        minLength={1}
      />
      <button type="submit" disabled={value < 1} className="send-message">
        Send
      </button>
    </form>
  );
};

export { MessageInput };
