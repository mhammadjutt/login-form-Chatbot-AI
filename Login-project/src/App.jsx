import React, { useState } from 'react';
import Navbar from './Navbar';
import LoginForm from './LoginForm';
import Chatbot from './Chatbot';
import './App.css';


function App() {
  const [isLoginned, setIsLoginned] = useState(false);
  const [userDetail, setUserDetail] = useState(null);

  const handleLogin = (credentials) => {
    // In a real app, you would validate credentials here
    setUserDetail(credentials);
    setIsLoginned(true);
  };

  const handleLogout = () => {
    setIsLoginned(false);
    setUserDetail(null);
  };

  return (
    <div className="App">
      {isLoginned ? (
        <>
          <Navbar userEmail={userDetail?.email} />
          <div className="content">
            <h1 className='heading'>Welcome to your Dashboard</h1>
            <p>You are now logged in.</p>
            <Chatbot onLogout={handleLogout} />
          </div>
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />

        
      )}
    </div>
  );
}

export default App;