import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light" style={{ fontSize: '14px' }}>
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="widget nav-item" style={{ borderBottom: '4px solid' }} key ="boss">
              <i className="fas fa-user-alt fa-2x"></i>
              <span className="nav-link active"> CEO</span>
            </li>
          </ul>
        </div>
      </nav>
      <span className="target"></span>
    </div>
  );
};

export default Navbar;
