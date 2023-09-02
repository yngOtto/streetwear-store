const initialState = {
    isDynamicHeaderVisible: true,
    dynamicHeaderHeight: 0,
  };
  
  export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DYNAMIC_HEADER_VISIBILITY':
        return { ...state, isDynamicHeaderVisible: action.payload };
      case 'SET_DYNAMIC_HEADER_HEIGHT':
        return { ...state, dynamicHeaderHeight: action.payload };
      default:
        return state;
    }
  };
  