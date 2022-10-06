import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatRoom from "../ChatRoom";
import { Landing } from "../Landing";

const AuthenticatedApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room/:id" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AuthenticatedApp };
