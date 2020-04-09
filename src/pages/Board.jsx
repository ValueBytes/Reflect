import React, { Component } from 'react';
import { connect } from 'react-redux';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.columns[0].name}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    columns: state.board.columns
  };
}

export default connect(mapStateToProps)(Board);