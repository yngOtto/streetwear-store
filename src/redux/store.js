import { configureStore, combineReducers } from '@reduxjs/toolkit';

const initialState = {
  isDynamicHeaderVisible: true,
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DYNAMIC_HEADER_VISIBILITY':
      return { ...state, isDynamicHeaderVisible: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  header: headerReducer,

});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
