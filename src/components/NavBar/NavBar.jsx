import "./nav-bar.css";
import {ThemeContext} from '../../context/themeContext';
import {useContext} from 'react';

export default function NavBar() {
    const context = useContext(ThemeContext);
    
    return (
        <div id="nav-container" className={`${context.theme}-theme-nav`}>
            <nav id="nav-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    )
}