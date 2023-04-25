import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../ReduxStore/slices/TodoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});


