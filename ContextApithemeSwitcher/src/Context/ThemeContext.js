import React, { createContext, useContext } from "react";

const ThemeContext=createContext({
    ThemeMode:'dark',
    lightTheme:()=>{},
    DarkTheme:()=>{}
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}