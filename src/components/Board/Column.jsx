import React, { Component } from 'react';

import BoardItem from './BoardItem.jsx';

class Column extends Component {
  constructor(props) {
    super(props);
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
          <BoardItem text="blah" />
        </ul>
      </section>
    );
  }
}

export default Column;