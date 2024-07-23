import "./footer.css";
import {ThemeContext} from "../../context/themeContext";
import {useContext} from "react";

export default function Footer() {
    const context = useContext(ThemeContext);

    return (
        <footer className={`${context.theme}-theme-footer`}>
            <p>Example Footer</p>
        </footer>
    )
}