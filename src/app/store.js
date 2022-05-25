import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sankeyReducer from '../features/sankey/sankeySlice';
import i18nReducer from "../services/i18n/i18nSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sankey: sankeyReducer,
    i18n: i18nReducer,
  },
});
