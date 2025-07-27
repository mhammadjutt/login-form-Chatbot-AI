import React from 'react';

function Chatbot({ onLogout }) {
  return (
    <div className="chatbot-container">
      {/* The component name is Chatbot as requested */}
      <button onClick={onLogout} className="logout-button">Logout</button>
    </div>
  );
}

export default Chatbot;