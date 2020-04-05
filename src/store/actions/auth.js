import store from '../index';

const setUser = (user) => {
  store.dispatch({type: 'SET_USER', payload: user});
  store.dispatch({type: 'SIGNED_IN', payload: true});
}

export {
  setUser
}