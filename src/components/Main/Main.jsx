import "./main.css";
import Button from "../Button/Button";
import {ThemeContext} from "../../context/themeContext";
import {useContext} from "react";

export default function Main() {
    const context = useContext(ThemeContext);

    return (
        <div id="main-section-container">
            {context.theme === "dark" ? <h1 style={{color: "red"}}>Click The Button To Toggle To Light Mode</h1> : <h1>Click The Button To Toggle To Dark Mode</h1>}
           <Button /> 
        </div>
    )
}