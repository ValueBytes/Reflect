const initState = {
  listener: false,
  itemsListener: false,
  meta: {},
  columns: [],
  cards: []
};

const boardReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_META':
      state = {
        ...state,
        meta: action.payload
      };
      break;
    
    case 'SET_COLUMNS':
      state = {
        ...state,
        columns: action.payload
      };
      break;

    case 'SET_BOARD_CARDS':
      state = {
        ...state,
        cards: action.payload
      };
      break;

    case 'SET_BOARD_LISTENER':
      state = {
        ...state,
        listener: action.payload
      };
      break;

    case 'REMOVE_BOARD_LISTENER':
      state = {
        ...state,
        listener: false
      };
      break;
    
    case 'SET_BOARD_ITEMS_LISTENER':
      state = {
        ...state,
        itemsListener: action.payload
      };
      break;
    
    case 'REMOVE_BOARD_ITEMS_LISTENER':
      state = {
        ...state,
        itemsListener: false
      };
      break;
  }

  return state;
}

export default boardReducer;