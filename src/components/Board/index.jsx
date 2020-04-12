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
    const { columns } = this.props;

    return columns ? (
      <section className="board">
        <div className="board__columns">
          {
            columns &&
            this.getColumns(columns)
          }
        </div>
      </section>
    ) : (
      <h1>Loading</h1>
    );
  }
}

export default Board;