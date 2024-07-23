import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = ({ projectId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState({ sender: '', content: '', projectId });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/messages/${projectId}`)
            .then(response => setMessages(response.data));

        socket.on('receiveMessage', (message) => {
            setMessages([...messages, message]);
        });

        return () => socket.off('receiveMessage');
    }, [projectId, messages]);

    const sendMessage = () => {
        socket.emit('sendMessage', newMessage);
        setNewMessage({ ...newMessage, content: '' });
    };

    return (
        <div className="chat">
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className="chat-message">
                        <strong>{message.sender}</strong>: {message.content}
                    </div>
                ))}
            </div>
            <input type="text" placeholder="Your name" value={newMessage.sender} onChange={(e) => setNewMessage({ ...newMessage, sender: e.target.value })} />
            <input type="text" placeholder="Type a message" value={newMessage.content} onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
