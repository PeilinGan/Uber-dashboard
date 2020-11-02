import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  onClickNav = (selection) => {
    this.props.onClickDashboard(selection);
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ fontSize: '14px' }}>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li
                className="widget nav-item"
                style={{ borderBottom: `${this.props.selection === 'product' ? '3px solid' : ''}` }}
                onClick={() => {
                  this.onClickNav('product');
                }}
              >
                <i className="fas fa-money-bill-wave fa-2x"></i>
                <span className={`nav-link ${this.props.selection === 'product' ? 'active' : ''}`} href="#">
                  Pricing
                </span>
              </li>
              <li
                className="widget nav-item"
                style={{ borderBottom: `${this.props.selection === 'technology' ? '3px solid' : ''}` }}
                onClick={() => {
                  this.onClickNav('technology');
                }}
              >
                <i className="fas fa-laptop fa-2x"></i>
                <a className={`nav-link ${this.props.selection === 'technology' ? 'active' : ''}`} href="#">
                  Technology
                </a>
              </li>
              <li
                className="widget nav-item"
                style={{ borderBottom: `${this.props.selection === 'uberATG' ? '3px solid' : ''}` }}
                onClick={() => {
                  this.onClickNav('uberATG');
                }}
              >
                <i className="fas fa-rocket fa-2x"></i>
                <a className={`nav-link ${this.props.selection === 'uberATG' ? 'active' : ''}`} href="#">
                  Uber ATG
                </a>
              </li>
              <li
                className="widget nav-item"
                style={{ borderBottom: `${this.props.selection === 'platform' ? '3px solid' : ''}` }}
                onClick={() => {
                  this.onClickNav('platform');
                }}
              >
                <i className="fas fa-users fa-2x"></i>
                <a className={`nav-link ${this.props.selection === 'platform' ? 'active' : ''}`} href="#">
                  Platform
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <span className="target"></span>
      </div>
    );
  }
}

export default Navbar;
