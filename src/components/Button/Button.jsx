import "./button.css";
import {ThemeContext} from "../../context/themeContext";
import {useContext} from "react";

export default function Button() {
    const context = useContext(ThemeContext);
    
    return (
        <div>
            <button type="button" onClick={context.toggle} className={`${context.buttonTheme}-theme-button`}>Change Theme</button>
        </div>
    )
}