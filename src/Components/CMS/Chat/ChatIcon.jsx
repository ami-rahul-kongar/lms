import React, { useState } from 'react';
import Chatbot from './Chat';

const ChatIcon = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="chat-icon-container">
      <div className="chat-icon" onClick={toggleChat}>
        <i className="fas fa-comment"></i>
      </div>
      {showChat && <Chatbot onClose={toggleChat} />}
    </div>
  );
};

export default ChatIcon;
