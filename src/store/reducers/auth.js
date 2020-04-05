const initState = {
  user: {
    displayName: 'Not signed in'
  },
  signedIn: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_USER': 
      state = {
        ...state,
        user: action.payload
      };
      break;
    
    case 'SIGNED_IN':
      state = {
        ...state,
        signedIn: action.payload
      };
      break;
  }

  return state;
};

export default authReducer;