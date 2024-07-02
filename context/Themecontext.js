"use client"
import { createContext , useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) =>{
    const [theme,setTheme] = useState('dark')

    useEffect(()=>{
        const systemtheme = localStorage.getItem('theme') || 'dark'
        setTheme(systemtheme)
    },[]);

    useEffect(()=> {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme',theme)
    },[themes])

    const toggleTheme = () =>{
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light': 'dark'))
        console.log("toggle them button clicked")
    }

    return(
        <ThemeContext.Provider value={{theme ,toggleTheme}}>
            {children}
        </ThemeContext.Provider> 
    )
}

export {ThemeContext, ThemeProvider};