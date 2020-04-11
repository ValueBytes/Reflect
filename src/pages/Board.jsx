import React, { Component } from 'react';
import Board from '../components/Board/index.jsx';
import firebase from '../config/firebase';

const db = firebase.firestore();

class BoardDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ref: null,
      board: null
    };
  }

  componentDidMount() {
    const board = this.props.match.params.id;

    let ref = db.collection('boards')
      .doc(board)
      .onSnapshot(doc => {
        this.setState({
          board: doc.data()
        });
      });
    
    this.setState({
      ref
    });
  }

  componentWillUnmount() {
    const { ref } = this.state;

    // Disable realtime when destroying component
    ref();
  }

  render() {
    const { board } = this.state;

    return (
      <Board board={board} />
    );
  }
}

export default BoardDetails;