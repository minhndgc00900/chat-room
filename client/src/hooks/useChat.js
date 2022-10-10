
import { useEffect, useMemo, useRef, useState } from "react";
import io from "socket.io-client";
import { v4 as uuidv4 } from 'uuid';

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const SOCKET_SERVER_URL = "http://localhost:4000";

const useChat = roomId => {
    const [messages, setMessages] = useState([]);
    const socketClientRef = useRef();

    useEffect(() => {
            // Creates a WebSocket connection
            socketClientRef.current = io(SOCKET_SERVER_URL, {
                query: { roomId },
            });
            socketClientRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
                const incomingMessage = {
                    ...message,
                    ownedByCurrentUser: message.senderId === socketClientRef.current.id,
                    uuid: uuidv4(),
                };
                setMessages(messages => [...messages, incomingMessage]);
            })

        return () => {
            socketClientRef.current.disconnect();
        }
    }, [roomId])

    const sendMessage = messageBody => {
        if (messageBody) {
            socketClientRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
                body: messageBody,
                senderId: socketClientRef.current.id,
            })
        }
    }
    return { messages, sendMessage };
}

export default useChat;
