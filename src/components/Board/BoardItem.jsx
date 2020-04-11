import React, { Component } from 'react';

class BoardItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.props;
    
    return (
      <li className="board-item">
        {text}
      </li>
    )
  }
}

export default BoardItem;