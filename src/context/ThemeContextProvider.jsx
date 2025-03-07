import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({
    darkMode: true,
    handleTheme: () => {}
});

const ThemeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);
    
    const handleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const useThemeContext = () => {
    return useContext(ThemeContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { useThemeContext, ThemeContextProvider }