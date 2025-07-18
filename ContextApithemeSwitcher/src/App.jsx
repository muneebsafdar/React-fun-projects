import React,{ useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'
import { ThemeProvider } from './Context/ThemeContext'

function App() {

  const [ThemeMode,setThemeMode]=useState('light')

  const lightTheme=()=>{
    setThemeMode('light')
  }
  const DarkTheme=()=>{
    setThemeMode('dark')
  }

  useEffect(()=>{
    const htmlTag=document.querySelector('html')
    htmlTag.classList.remove('light','dark')
    htmlTag.classList.add(ThemeMode)
  },[ThemeMode])

  return (


    <ThemeProvider value={{ThemeMode,lightTheme,DarkTheme}}>
      
        <div className="flex flex-wrap min-h-screen items-center ">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                <Card/>
              </div>
          </div>
        </div>

    </ThemeProvider>
  )
}

export default App
