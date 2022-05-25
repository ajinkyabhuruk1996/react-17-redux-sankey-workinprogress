//import { useLanguageContext } from "./contexts/LanguageContext";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import {
    decrement,
    increment,
    currentLanguage,    
    changeLanguage
  } from '../services/i18n/i18nSlice';


export default function LanguageHandler() {
  //const { language, changeLanguage } = useLanguageContext();
  const lang = useSelector(currentLanguage);
  const dispatch = useDispatch();
  //const [language, changeLanguage] = useState(lang);
  return (
    <select value={lang} onChange={(e) =>   dispatch(changeLanguage(e.target.value))}>
      <option value="en">En- English</option>
      <option value="it">It- Italian</option>
      <option value="hn">Hn- Hindi</option>
      <option value="de">De- Germany</option>
      <option value="fr">Fr- France</option>
    </select>
  );
}
