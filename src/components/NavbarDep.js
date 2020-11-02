import React from 'react';
import './NavbarDep.css';

class Navbar extends React.Component {
  onClickNav = (selection) => {
    this.props.onClickDashboard(selection);
  };

  render() {
    let key = 10;
    const renderedNavbar = options.map((item) => {
      key += 1;
      return (
        <li
          className="widget nav-item"
          key={key}
          style={{ borderBottom: `${this.props.selection === item.option ? '3px solid' : ''}` }}
          onClick={() => {
            this.onClickNav(item.option);
          }}
        >
          <i className={item.iconName}></i>
          <span className={`nav-link ${this.props.selection === item.option ? 'active' : ''}`}> {item.optionName}</span>
        </li>
      );
    });
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ fontSize: '14px' }}>
          <div className="navbar">
            <ul className="navbar-nav">{renderedNavbar}</ul>
          </div>
        </nav>
        <span className="target"></span>
      </div>
    );
  }
}

const options = [
  {
    option: 'product',
    optionName: 'Product',
    iconName: 'fas fa-money-bill-wave fa-2x',
  },
  {
    option: 'technology',
    optionName: 'Technology',
    iconName: 'fas fa-laptop fa-2x',
  },
  {
    option: 'uberATG',
    optionName: 'UberATG',
    iconName: 'fas fa-rocket fa-2x',
  },
  {
    option: 'platform',
    optionName: 'Platform',
    iconName: 'fas fa-users fa-2x',
  },
];

export default Navbar;
