const initState = {
  boards: []
};

const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_BOARDS':
      state = {
        boards: [...action.payload]
      };
      break;
  }

  return state;
}

export default dashboardReducer;