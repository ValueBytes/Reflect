import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { boards } = this.props;

    return (
      <div className="dashboard">
        <section className="dashboard__section">
          <header>
            <h2 className="dashboard__section-title">Public boards</h2>
          </header>
          <div className="dashboard__section-content">
            {
              boards.length > 0 &&
              boards.map(b => (
                <Card board={b} />
              ))
            }
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.dashboard.boards
  };
}

export default connect(mapStateToProps)(Dashboard);