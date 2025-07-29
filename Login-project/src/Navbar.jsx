import React from 'react';

function Navbar({ userEmail }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Jutt Apps</div>
      <div className="navbar-user">
        {userEmail && <span>Welcome to, {userEmail}</span>}
      </div>
    </nav>
  );
}

export default Navbar;