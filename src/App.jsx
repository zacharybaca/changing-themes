import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import {ThemeContext} from "./context/themeContext";
import {useContext} from "react";
import './App.css'

function App() {
  const context = useContext(ThemeContext);

  return (
    <div id="main-container" className={`${context.theme}-theme`}>
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
