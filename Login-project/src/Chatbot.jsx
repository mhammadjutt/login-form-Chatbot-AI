import React from 'react';
import ChatbotApp from './Chatbotai';

function Chatbot({ onLogout }) {
  return (
    <div className="chatbot-container">
      {/* The component name is Chatbot as requested */}
      <ChatbotApp/>
      <button onClick={onLogout} className="logout-button">Logout</button>
    </div>
  );
}

export default Chatbot;