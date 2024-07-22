/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
    return (
        <ThemeContext.Provider>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}