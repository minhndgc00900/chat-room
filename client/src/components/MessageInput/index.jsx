import React, { useState } from "react";
import "./styles.css";

const MessageInput = ({ sendMessage }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
