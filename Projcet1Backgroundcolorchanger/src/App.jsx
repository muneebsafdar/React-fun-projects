import { useState } from 'react'
import './App.css'
import React from 'react'
import Buttons from './components/Buttons'


function App() {
  const [color, setColor] = useState("gray")

  return (
    <>
      <div 
      className='w-full h-screen ' 
      style={{backgroundColor:color}}>
      </div>

      <div 
      className='bg-white absolute bottom-10 rounded-3xl w-[80%] mx-30'>

        <Buttons bgColor="red" ColorSetter={setColor} Btn_text="Red"/>
        <Buttons bgColor="gray" ColorSetter={setColor} Btn_text="gray"/>
        <Buttons bgColor="green" ColorSetter={setColor} Btn_text="green"/>
        <Buttons bgColor="yellow" ColorSetter={setColor} Btn_text="yellow"/>
        <Buttons bgColor="pink" ColorSetter={setColor} Btn_text="pink"/>
        <Buttons bgColor="purple" ColorSetter={setColor} Btn_text="purple"/>
        <Buttons bgColor="violet" ColorSetter={setColor} Btn_text="violet"/>
        <Buttons bgColor="blue" ColorSetter={setColor} Btn_text="blue"/>
        <Buttons bgColor="black" ColorSetter={setColor} Btn_text="black"/>
        <Buttons bgColor="orange" ColorSetter={setColor} Btn_text="orange"/>
        <Buttons bgColor="magenta" ColorSetter={setColor} Btn_text="magenta"/>

      </div>
    </>
  )
}

export default App
