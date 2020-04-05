import store from '../index';

const setUser = (user) => {
  store.dispatch({type: 'SET_USER', payload: user});
  store.dispatch({type: 'SIGNED_IN', payload: true});
}

const setDefaultUser = () => {
  store.dispatch({type: 'SET_USER', payload: {displayName: 'Not signed in'}});
  store.dispatch({type: 'SIGNED_IN', payload: false});
}

export {
  setUser,
  setDefaultUser
}