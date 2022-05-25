//https://phrase.com/blog/posts/roll-your-own-i18n-solution-react-redux/

import { createSlice, current } from "@reduxjs/toolkit";
import produce from "immer";
import {
  defaultLang,
  supportedLangs,
  translation
} from "../../config/i18nConfig";
const initialState = {
  lang: defaultLang, // "en" when app loads
  supportedLangs: { ...supportedLangs },
  // We'll keep our translations in Redux to start.
  // Later on we'll move them to their own files so 
  // that they're easier to manage. 
  translations: { ...translation },
};
export const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: { 
    changeLanguage: (state, action) => {    
       let currentState =  current(state);
       state.lang= action.payload;     
       console.log(state.lang)
    },
  }
});

export const { changeLanguage } = i18nSlice.actions;

export const currentLanguage = (state) => {
    return state.i18n.lang;
};

export const selectTranslations = (state) => {   
  return state.i18n.translations[state.i18n.lang];
}
export default i18nSlice.reducer;