import firebase from '../../config/firebase';

const db = firebase.firestore();

const ROOT_COLLECTION = 'boards';

export function removeBoardListener() {
  return (dispatch, getState) => {
    let listener = getState().board.listener;

    if (!listener)
      return;

    listener();
    dispatch({type: 'REMOVE_BOARD_LISTENER'});
  }
}

export function setBoardListener(id) {
  return async (dispatch, getState) => {
    let listener = getState().board.listener;

    if (listener) {
      listener();
      listener = null;
    }

    let ref = db
      .collection(ROOT_COLLECTION)
      .doc(id)
      .onSnapshot(doc => {
        dispatch(
          setBoard(
            {
              id: doc.id,
              ...doc.data()
            }
          )
        );
      });

    dispatch({type: 'SET_BOARD_LISTENER', payload: ref});
  }
}

export function removeItemListener() {
  return (dispatch, getState) => {
    let listener = getState().board.itemsListener;

    if (!listener)
      return;

    listener();
    dispatch({type: 'REMOVE_BOARD_ITEMS_LISTENER'});
  }
}

export function setItemListener(boardId) {
  return async (dispatch, getState) => {
    let listener = getState().board.itemsListener;

    if (listener) {
      listener();
      listener = null;
    }

    let ref = db
      .collection(`${ROOT_COLLECTION}`)
      .doc(`${boardId}`)
      .collection('items')
      .onSnapshot(snap => {
        let cards = transformResponse(snap);
        dispatch(setBoardItems(cards));
      });

    dispatch({type: 'SET_BOARD_ITEMS_LISTENER', payload: ref});
  }
}

export function setBoard(board) {
  return dispatch => {
    dispatch({type: 'SET_BOARD_COLUMNS', payload: board.columns});
    dispatch({type: 'SET_BOARD_META', payload: {
      title: board.title,
      uid: board.uid,
      id: board.id
    }});
  }
}

export function setBoardItems(items) {
  return dispatch => {
    dispatch({type: 'SET_BOARD_CARDS', payload: items});
  }
}

/**
 * Put item collection into array with its id
 * 
 * @param {Array} response firestore collection
 */
function transformResponse(response) {
  let cards = [];

  response.forEach(item => {
    let card = {
      id: item.id,
      ...item.data()
    };

    cards.push(card);
  });

  return cards;
}

/**
 * Update board card
 * 
 * @param {string} id Id of card
 * @param {string} text new text
 */
export function updateCard(id, text) {
  return async (dispatch, getState) => {
    let currentBoard = getState().board.meta.id;
    
    if (!currentBoard)
      return;

    try {
      await db
        .collection(ROOT_COLLECTION)
        .doc(currentBoard)
        .collection('items')
        .doc(id)
        .update({
          text
        });
    } catch (err) {
      console.error(err);
    }
  }
}