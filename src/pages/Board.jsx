import React, { Component } from 'react';
import Board from '../components/Board/index.jsx';
import { connect } from 'react-redux';

class BoardDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { columns } = this.props;

    return (
      <Board 
        columns={columns}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    columns: state.board.columns,
  };
}

export default connect(mapStateToProps)(BoardDetails);