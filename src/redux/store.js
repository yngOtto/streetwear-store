// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './path/to/reducers/rootReducer'; // Make sure the path is correct

const store = configureStore({
  reducer: rootReducer,
});

export default store;
