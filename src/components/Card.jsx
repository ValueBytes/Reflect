import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { board } = this.props;
    const title = board.title;
    const letter = board.title.substr(0, 1);

    return (
      <div className="card">
        <div className="card__icon">
          {letter}
        </div>

        <p className="card__title">{title}</p>
      </div>
    );
  }
}

export default Card;