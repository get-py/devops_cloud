import PageAbout from "./pages/PageAbout";
import PageCounter from "./pages/PageCounter"
import TopNav from "./components/TopNav";
import { useState } from "react";

function App({initial}) {
  const [pageName, setPageName] = useState("about");


  return (
    <div>
      <h1>박예린의 리액트</h1>
      <TopNav changePageName={setPageName} />
      {pageName === "about" && <PageAbout />}
      {pageName === "counter" && <PageCounter />}
    </div>    
  );
}


export default App;