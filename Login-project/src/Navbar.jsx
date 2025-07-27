import React from 'react';

function Navbar({ userEmail }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MyApp</div>
      <div className="navbar-user">
        {userEmail && <span>Welcome, {userEmail}</span>}
      </div>
    </nav>
  );
}

export default Navbar;