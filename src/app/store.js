import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sankeyReducer from '../features/sankey/sankeySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sankey: sankeyReducer
  },
});
