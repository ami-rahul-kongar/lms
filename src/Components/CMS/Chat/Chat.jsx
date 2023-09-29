import React, { useState } from "react";
import { FaComment, FaTimes } from "react-icons/fa"; 
import "./Chat.css";

const Chat = () => {
  const [showChat, setShowChat] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText("");

      setTimeout(() => {
        const botResponse = getBotResponse(inputText);
        setMessages([...messages, { text: botResponse, isUser: false }]);
      }, 500);
    }
  };

  const getBotResponse = (userInput) => {
    return "I'm a chatbot! How can I help?";
  };

  return (
    <div className={`chatbot ${showChat ? "active" : ""}`}>
      <div className="chatbot-toggle" onClick={toggleChat}>
        {showChat ? (
          <FaTimes /> 
        ) : (
          <FaComment /> 
        )}
      </div>
      <div className="chatbot-popup">
        <div className="chatbot-header">
          <h3>Chatbot</h3>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isUser ? "user" : "bot"}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
