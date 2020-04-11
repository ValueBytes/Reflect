import React, { Component } from 'react';

import Column from './Column.jsx';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  order(first, second) {
    if (first.order < second.order)
      return -1;
    
    if (first.order > second.order)
      return 1;

    return 0;
  }

  getColumns(cols) {
    return cols
      .sort(this.order)
      .map(col => <Column key={col.order} details={col} />);
  }

  render() {
    const { board } = this.props;

    return board ? (
      <section className="board">
        <header>
          {board.title}
        </header>

        <div className="board__columns">
          {
            board.columns &&
            this.getColumns(board.columns)
          }
        </div>
      </section>
    ) : (
      <h1>Loading</h1>
    );
  }
}

export default Board;