/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
    const [theme, setTheme] = React.useState("light");

    const [buttonTheme, setButtonTheme] = React.useState("dark");

    const toggleTheme = () => {
        setTheme(prevState => prevState === "light" ? "dark" : "light");
        setButtonTheme(prevState => prevState === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            toggle: toggleTheme,
            buttonTheme: buttonTheme,
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}