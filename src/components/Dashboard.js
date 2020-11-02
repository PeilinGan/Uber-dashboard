import React from 'react';
import Cards from './Cards';
import Navbar from './Navbar';
import './Dashboard.css';

class Dashboard extends React.Component {
  state = { indexSelected: 'product' };

  onClickDashboard = (selection) => {
    this.setState({ indexSelected: selection });
  };

  render() {
    return (
      <div>
        <div className="widgetWrap">
          <div className="widgetTitle">
            <h1>Uber</h1>
          </div>
        </div>

        <div className="container" style={{ paddingTop: '75px' }}>
          <div>
            <Navbar selection={this.state.indexSelected} onClickDashboard={this.onClickDashboard} />
          </div>
          <Cards selection={this.state.indexSelected} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
