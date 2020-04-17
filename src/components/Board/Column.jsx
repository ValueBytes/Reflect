import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardItem from './BoardItem.jsx';

/**
 * Render board column
 * 
 * Takes card items from board state
 */
class Column extends Component {
  constructor(props) {
    super(props);

    this.filterCards = this.filterCards.bind(this);
    this.getCards = this.getCards.bind(this);
  }

  filterCards(card) {
    const { details } = this.props;

    return card.order === details.order;
  }

  getCards() {
    const { cards } = this.props;

    return cards
      .filter(this.filterCards)
      .map(card => <BoardItem key={card.id} id={card.id} text={card.text} />);
  }

  render() {
    const { details } = this.props;

    return (
      <section className="column">
        <header className="column__header">
          <div className="column__accent" />
          <h2 className="column__title">{details.name}</h2>
        </header>

        <ul className="column__cards">
          {
            this.getCards()
          }
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.board.cards
  };
}

export default connect(mapStateToProps)(Column);