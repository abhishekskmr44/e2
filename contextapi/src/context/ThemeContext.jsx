import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme]= useState("light");

    return (
        <ThemeContext.Provider>
        value = {{
            isLight:theme==="Light"
            toggleTheme,
        }}
        {children}
        </ThemeContext.Provider>
    );
};