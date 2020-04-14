import React, { Component } from 'react';
import Board from '../components/Board/index.jsx';
import { connect } from 'react-redux';
import { 
  setBoardListener,
  removeBoardListener,
  setItemListener,
  removeItemListener
} from '../store/actions/board';

class BoardDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { match, setListener, setItemListener } = this.props;
    
    setListener(match.params.id);
    setItemListener(match.params.id);
  }

  componentWillUnmount() {
    const { removeListener, removeItemListener } = this.props;
    removeListener();
    removeItemListener();
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

const mapDispatchToProps = (dispatch) => {
  return {
    setListener: (id) => {
      dispatch(setBoardListener(id));
    },
    removeListener: () => {
      dispatch(removeBoardListener());
    },
    setItemListener: (id) => {
      dispatch(setItemListener(id));
    },
    removeItemListener: () => {
      dispatch(removeItemListener());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardDetails);