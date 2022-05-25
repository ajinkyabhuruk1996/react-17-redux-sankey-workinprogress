import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Menu1 from "../routes/menu1";
  import Menu2 from "../routes/menu2";
  import Menu3 from "../routes/menu3";
  import SankeyChart from "../routes/sankeyChart";
  import LanguageHandler from "../components/languageHandler";
  //https://reactrouter.com/docs/en/v6/getting-started/tutorial
  export default function MainContent() {
      return (
        <BrowserRouter>
              <nav
                  style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
                  height: "50px",
                  'background-color': "#edfaf9"
                  }}
              >
                <span> My Cart </span>
                  <Link to="/menu1">Menu Item 1</Link> |{" "}
                  <Link to="/menu2">Menu Item 2</Link>
                  <Link to="/menu3">Menu Item 3</Link>
                  <Link to="/sankeyexample">Report-sankey</Link>
                  <div 
                    style= {{
                      width: "300px",
                      float: "right"
                    }}                  
                  >
                   <span>Please select Langaue</span> &nbsp;
                   <LanguageHandler />
                </div>
              </nav>
              
          <Routes>
            <Route path="/" element={<Menu1 />} />
            <Route path="menu1" element={<Menu1 />} />
            <Route path="menu2" element={<Menu2 />} />
            <Route path="menu3" element={<Menu3 />} />
            <Route path="sankeyexample" element={<SankeyChart />} />
     
          </Routes>
        </BrowserRouter>
      );
    }