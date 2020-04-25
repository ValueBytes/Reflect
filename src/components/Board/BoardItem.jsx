import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCard } from '../../store/actions/board';

import Editable from '../Editable.jsx';

class BoardItem extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
  }

  update(text) {
    const { id } = this.props;

    this.props.updateCard(id, text);
  }

  render() {
    const { text } = this.props;
    
    return (
      <li className="board-item">
        <Editable
          defaultText={text}
          className="board-item__textbox"
          update={this.update}
        />
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCard: (id, text) => {
      dispatch(updateCard(id, text));
    }
  };
}

export default connect(null, mapDispatchToProps)(BoardItem);
