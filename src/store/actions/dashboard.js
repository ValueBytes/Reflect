import firebase from '../../config/firebase';

const db = firebase.firestore();

export function getBoards() {
  return async (dispatch, getState) => {
    const userID = getState().auth.user.uid;

    if (!userID)
      dispatch({type: 'SET_ERROR', payload: 'no user.'});
      
    let boardsRef = await db.collection('boards');
    let userBoards = await boardsRef
      .where('uid', '==', userID)
      .get();

    let boards = [];

    userBoards.forEach((doc) => {
        boards.push({
          id: doc.id,
          ...doc.data()
        });
    });
    
    dispatch({type: 'SET_BOARDS', payload: boards});
  }
}