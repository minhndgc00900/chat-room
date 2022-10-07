
import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { v4 as uuidv4 } from 'uuid';

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const SOCKET_SERVER_URL = "http://localhost:4000";

const useChat = roomId => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        // Creates a WebSocket connection
        socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
            query: { roomId },
        });

        socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socketRef.current.id,
                uuid: uuidv4(),
            };

            setMessages(messages => [...messages, incomingMessage]);
        })

        return () => {
            socketRef.current.disconnect();
        }
    }, [roomId])

    const sendMessage = messageBody => {
        if (messageBody) {
            console.log(2222);
            socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
                body: messageBody,
                senderId: socketRef.current.id,
            })
        }
    }
    return { messages, sendMessage };
}

export default useChat;
