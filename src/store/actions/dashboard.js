import firebase from '../../config/firebase';

const db = firebase.firestore();

export function getBoards() {
  return async (dispatch) => {
    let request = await db.collection('boards').get();
    let boards = [];

    request.forEach((doc) => {
        boards.push({
          id: doc.id,
          ...doc.data()
        });
    });
    
    dispatch({type: 'SET_BOARDS', payload: boards});
  }
}