const initialState = {
    isDynamicHeaderVisible: true,
  };
  
  export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DYNAMIC_HEADER_VISIBILITY':
        return { ...state, isDynamicHeaderVisible: action.payload };
      default:
        return state;
    }
  };
  