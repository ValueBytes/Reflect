import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Card extends Component {
  constructor(props) {
    super(props);

    this.gotoBoard = this.gotoBoard.bind(this);
  }

  gotoBoard() {
    const id = this.props.board.id;

    this.props.history.push(`/${id}`);
  }

  render() {
    const { board } = this.props;
    const title = board.title;
    const letter = board.title.substr(0, 1);

    return (
      <div className="card" onClick={this.gotoBoard}>
        <div className="card__icon">
          {letter}
        </div>

        <p className="card__title">{title}</p>
      </div>
    );
  }
}

export default withRouter(Card);