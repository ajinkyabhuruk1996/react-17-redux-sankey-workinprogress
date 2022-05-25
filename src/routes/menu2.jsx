
//https://reactrouter.com/docs/en/v6/getting-started/tutorial
//https://phrase.com/blog/posts/roll-your-own-i18n-solution-react-redux/
import ProductList from "../components/productList";
import { useSelector } from "react-redux";  
import { selectTranslations, currentLanguage } from "../services/i18n/i18nSlice";
import { useEffect} from 'react';

export default function Menu2() {
  const t = useSelector(selectTranslations);

  return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Menu 2 Page Content</h2>
        {t.tagline}
        <ProductList category="dataForMenu2"/>
      </main>
    );
  }