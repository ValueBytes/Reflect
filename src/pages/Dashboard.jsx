import React, { Component } from 'react';
import Card from '../components/Card.jsx';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <section className="dashboard__section">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    );
  }
}

export default Dashboard;